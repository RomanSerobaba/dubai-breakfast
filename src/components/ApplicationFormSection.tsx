import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Send } from 'lucide-react';
import { validateApplicationForm, ApplicationFormData, ValidationErrors } from '../utils/validation.ts';
import { TICKET_PACKAGES } from '../utils/pricing.ts';

interface ApplicationFormSectionProps {
  selectedPackageId: string;
  onPackageChange: (pkgId: string) => void;
}

export const ApplicationFormSection: React.FC<ApplicationFormSectionProps> = ({
  selectedPackageId,
  onPackageChange,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    website: '',
    role: '',
    averageCheck: '',
    mainChallenge: '',
    packageId: selectedPackageId || 'participant_single',
    whatsapp: '',
    email: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaContainerRef = React.useRef<HTMLDivElement>(null);
  const widgetIdRef = React.useRef<number | null>(null);

  const RECAPTCHA_SITE_KEY = '6LdksvgtAAAAAM9SzsyKu8TybK_-yhKgKEy4v2if';

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const renderRecaptcha = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha && grecaptcha.render && recaptchaContainerRef.current) {
        if (widgetIdRef.current === null && recaptchaContainerRef.current.children.length === 0) {
          try {
            const wId = grecaptcha.render(recaptchaContainerRef.current, {
              sitekey: RECAPTCHA_SITE_KEY,
              callback: (token: string) => {
                setRecaptchaToken(token);
              },
              'expired-callback': () => {
                setRecaptchaToken(null);
              },
            });
            widgetIdRef.current = wId;
          } catch (e) {
            console.debug('reCAPTCHA init error:', e);
          }
        }
      }
    };

    if ((window as any).grecaptcha?.render) {
      renderRecaptcha();
    } else {
      interval = setInterval(() => {
        if ((window as any).grecaptcha?.render) {
          if (interval) clearInterval(interval);
          renderRecaptcha();
        }
      }, 300);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (selectedPackageId) {
      setFormData(prev => ({ ...prev, packageId: selectedPackageId }));
    }
  }, [selectedPackageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateApplicationForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    const packageInfo = TICKET_PACKAGES[formData.packageId]?.name || formData.packageId;

    try {
      // Send application to Telegram via server API
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          packageTitle: packageInfo,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        console.warn('Backend Telegram route returned status:', response.status);
      }
    } catch (err) {
      console.error('Error sending application to /api/application:', err);
    } finally {
      // Store submission locally so it persists
      try {
        const stored = JSON.parse(localStorage.getItem('bw_event_applications') || '[]');
        stored.push({
          ...formData,
          packageTitle: packageInfo,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('bw_event_applications', JSON.stringify(stored));
      } catch {
        // Fallback gracefully
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      website: '',
      role: '',
      averageCheck: '',
      mainChallenge: '',
      packageId: 'participant_single',
      whatsapp: '',
      email: '',
    });
    setErrors({});
    if (widgetIdRef.current !== null && (window as any).grecaptcha?.reset) {
      try {
        (window as any).grecaptcha.reset(widgetIdRef.current);
      } catch {}
    }
    setRecaptchaToken(null);
  };

  return (
    <section id="application" className="relative w-full py-12 sm:py-32 bg-white text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Предварительный отбор</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Подать заявку на участие
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Расскажите о вашем бизнесе — это поможет сформировать состав участников и подготовить предметную работу.
          </p>
        </div>

        {/* Card containing Form or Success State */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#E5E0D5] p-8 sm:p-14 shadow-xs">
          
          {/* Direct Contact Buttons (Telegram & WhatsApp) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://t.me/AlinaLisina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-2xl transition-all shadow-sm hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/80 font-medium">Написать напрямую</div>
                  <div className="text-sm sm:text-base font-bold">Telegram @AlinaLisina</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://wa.me/37129785825"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl transition-all shadow-sm hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/80 font-medium">Написать напрямую</div>
                  <div className="text-sm sm:text-base font-bold">WhatsApp (+371 29 785 825)</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {isSubmitted ? (
            /* Success confirmation state */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#E06D2B]/10 text-[#E06D2B] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-3">
                Спасибо за заявку!
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-lg mx-auto mb-8">
                Мы познакомимся с вашим бизнесом и свяжемся с вами в течение 24 часов по поводу подтверждения участия.
              </p>

              <div className="p-6 bg-white rounded-2xl border border-[#EDE8DE] text-left text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-8 space-y-2">
                <div><span className="font-semibold text-slate-900">Участник:</span> {formData.fullName}</div>
                <div><span className="font-semibold text-slate-900">Выбранный формат:</span> {TICKET_PACKAGES[formData.packageId]?.name || formData.packageId}</div>
                <div><span className="font-semibold text-slate-900">Связь:</span> {formData.whatsapp} / {formData.email}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/37129785825?text=${encodeURIComponent(
                    `Здравствуйте! Я подал заявку на High-Ticket Growth Breakfast в Дубае (${formData.fullName}, компания: ${formData.website}). Хочу подтвердить получение.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#1E3A5F] rounded-full transition-colors text-center shadow-sm"
                >
                  Написать в WhatsApp организатору
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Заполнить ещё одну заявку
                </button>
              </div>
            </div>
          ) : (
            /* Application Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Field: Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#0A192F] mb-2">
                  Имя и фамилия <span className="text-[#E06D2B]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Константин Романов"
                  className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-[#E5E0D5]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.fullName}</p>
                )}
              </div>

              {/* Field: Company Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#0A192F] mb-2">
                  Сайт компании или рабочий профиль <span className="text-[#E06D2B]">*</span>
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://company.ae или @telegram_channel"
                  className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                    errors.website ? 'border-red-500' : 'border-[#E5E0D5]'
                  }`}
                />
                {errors.website && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.website}</p>
                )}
              </div>

              {/* Grid: Role & Average Check */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-[#0A192F] mb-2">
                    Ваша роль в компании <span className="text-[#E06D2B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Основатель / CEO / Head of Sales"
                    className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                      errors.role ? 'border-red-500' : 'border-[#E5E0D5]'
                    }`}
                  />
                  {errors.role && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="averageCheck" className="block text-sm font-semibold text-[#0A192F] mb-2">
                    Средний чек продукта / услуги <span className="text-[#E06D2B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="averageCheck"
                    name="averageCheck"
                    value={formData.averageCheck}
                    onChange={handleChange}
                    placeholder="Например: $20,000 / от 100,000 AED"
                    className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                      errors.averageCheck ? 'border-red-500' : 'border-[#E5E0D5]'
                    }`}
                  />
                  {errors.averageCheck && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.averageCheck}</p>
                  )}
                </div>
              </div>

              {/* Field: Main Challenge */}
              <div>
                <label htmlFor="mainChallenge" className="block text-sm font-semibold text-[#0A192F] mb-2">
                  Главная задача в маркетинге или продажах, которую решаете сейчас <span className="text-[#E06D2B]">*</span>
                </label>
                <textarea
                  id="mainChallenge"
                  name="mainChallenge"
                  rows={3}
                  value={formData.mainChallenge}
                  onChange={handleChange}
                  placeholder="Опишите, с чем сталкиваетесь (например: реклама даёт заявки, но бюджет клиентов низкий; или переговоры затягиваются и клиенты уходят думать...)"
                  className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all resize-none ${
                    errors.mainChallenge ? 'border-red-500' : 'border-[#E5E0D5]'
                  }`}
                />
                {errors.mainChallenge && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.mainChallenge}</p>
                )}
              </div>

              {/* Field: Package selection cards (2x2 grid) */}
              <div>
                <label className="block text-sm font-semibold text-[#0A192F] mb-3">
                  1. Выберите формат участия <span className="text-[#E06D2B]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'participant_single', name: 'Участник', price: '85 €', oldPrice: '110 €', badge: null },
                    { id: 'breakdown_single', name: 'Участник с разбором', price: '150 €', oldPrice: '180 €', badge: null },
                    { id: 'pair_both_regular', name: 'Два обычных билета', price: '136 €', oldPrice: '176 €', badge: 'Скидка 20%' },
                    { id: 'pair_one_breakdown', name: 'Два билета с разбором', price: '188 €', oldPrice: '232 €', badge: 'Скидка 20%' },
                  ].map((pkg) => {
                    const isSelected = formData.packageId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, packageId: pkg.id }));
                          onPackageChange(pkg.id);
                        }}
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#E06D2B] ring-2 ring-[#E06D2B]/20 bg-[#E06D2B]/5'
                            : 'border-[#E5E0D5] bg-white hover:border-slate-400'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-[#E06D2B] bg-[#E06D2B]' : 'border-slate-300 bg-white'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <span className="font-bold text-sm sm:text-base text-[#0A192F] uppercase tracking-tight">
                              {pkg.name}
                            </span>
                          </div>
                          
                          <div className="text-right shrink-0">
                            <div className="text-base sm:text-lg font-extrabold font-mono text-[#0A192F]">
                              {pkg.price}
                            </div>
                            {pkg.oldPrice && (
                              <div className="text-xs text-slate-400 line-through">
                                {pkg.oldPrice}
                              </div>
                            )}
                          </div>
                        </div>

                        {pkg.badge && (
                          <div className="mt-2">
                            <span className="inline-block px-2.5 py-0.5 bg-amber-400 text-slate-900 text-[10px] font-bold rounded-full">
                              {pkg.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Fields: WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-[#0A192F] mb-2">
                    WhatsApp для связи <span className="text-[#E06D2B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                      errors.whatsapp ? 'border-red-500' : 'border-[#E5E0D5]'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.whatsapp}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0A192F] mb-2">
                    Рабочий email <span className="text-[#E06D2B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.ae"
                    className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#E5E0D5]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Google reCAPTCHA v2 Widget */}
              <div className="flex flex-col items-center justify-center pt-2">
                <div 
                  ref={recaptchaContainerRef}
                  className="min-h-[78px] flex items-center justify-center max-w-full overflow-hidden"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 sm:py-5 text-sm sm:text-base font-bold text-white animated-gradient-button rounded-full cursor-pointer shadow-lg hover:shadow-[#E06D2B]/30 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Отправка заявки...' : 'Подать заявку на участие'}</span>
                  {!isSubmitting && <ArrowUpRight className="w-5 h-5" />}
                </button>
                <div className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Мы гарантируем полную конфиденциальность данных и не передаём их третьим лицам.</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
      </div>
    </section>
  );
};
