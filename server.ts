import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '6705969228:AAFmgJx8ZHsohIjpoGD3tezHj-HgXSgroPA';
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LdksvgtAAAAAOJDhw-eMQjdwAa9_hkKnjE-DNxB';
let TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-5315547335';
if (!TELEGRAM_CHAT_ID.startsWith('-') && !TELEGRAM_CHAT_ID.startsWith('@')) {
  TELEGRAM_CHAT_ID = `-${TELEGRAM_CHAT_ID}`;
}

function escapeHtml(text: unknown): string {
  if (!text) return '—';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API endpoint for receiving and forwarding leads to Telegram
  app.post('/api/application', async (req, res) => {
    try {
      const { recaptchaToken, ...data } = req.body || {};
      let recaptchaStatus = 'Не заполнена';

      // Verify reCAPTCHA token if provided
      if (recaptchaToken && RECAPTCHA_SECRET_KEY) {
        try {
          const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
          const params = new URLSearchParams();
          params.append('secret', RECAPTCHA_SECRET_KEY);
          params.append('response', recaptchaToken);

          const verifyResp = await fetch(verifyUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
          });
          const verifyData: any = await verifyResp.json();
          if (verifyData.success) {
            recaptchaStatus = '✅ Пройдена (человек)';
          } else {
            console.warn('reCAPTCHA verification result:', verifyData);
            recaptchaStatus = `⚠️ Ошибка проверки (${verifyData['error-codes']?.join(', ') || 'failed'})`;
          }
        } catch (vErr) {
          console.error('reCAPTCHA network check failed:', vErr);
          recaptchaStatus = '⚠️ Ошибка запроса к Google';
        }
      }
      
      const message = [
        '🚀 <b>Новая заявка с сайта "HIGH-TICKET GROWTH BREAKFAST DUBAI"</b>',
        '━━━━━━━━━━━━━━━━━━━━',
        `👤 <b>Имя:</b> ${escapeHtml(data.fullName)}`,
        `💼 <b>Роль:</b> ${escapeHtml(data.role)}`,
        `🌐 <b>Сайт / проект:</b> ${escapeHtml(data.website)}`,
        `💵 <b>Средний чек:</b> ${escapeHtml(data.averageCheck)}`,
        `🎯 <b>Выбранный тариф:</b> ${escapeHtml(data.packageTitle || data.packageId)}`,
        `📱 <b>WhatsApp / Телефон:</b> ${escapeHtml(data.whatsapp)}`,
        `✉️ <b>Email:</b> ${escapeHtml(data.email)}`,
        `🛡️ <b>reCAPTCHA:</b> ${recaptchaStatus}`,
        '━━━━━━━━━━━━━━━━━━━━',
        `📝 <b>Главная задача / запрос:</b>\n${escapeHtml(data.mainChallenge)}`,
        '━━━━━━━━━━━━━━━━━━━━',
        `🕒 <b>Время заявки:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Dubai' })} (Dubai)`,
      ].join('\n');

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const result: any = await response.json();
      if (!result.ok) {
        console.error('Telegram API error:', result);
        return res.status(500).json({ success: false, error: result.description || 'Telegram API error' });
      }

      console.log('Lead successfully sent to Telegram chat:', TELEGRAM_CHAT_ID);
      return res.json({ success: true, messageId: result.result?.message_id });
    } catch (err: any) {
      console.error('Failed to process application:', err);
      return res.status(500).json({ success: false, error: err.message || 'Internal server error' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', telegramChatId: TELEGRAM_CHAT_ID });
  });

  // Development: Mount Vite middlewares
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static assets
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
