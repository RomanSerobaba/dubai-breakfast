import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Send } from 'lucide-react';
import { validateApplicationForm, ApplicationFormData, ValidationErrors } from '../utils/validation.ts';
import { TICKET_PACKAGES } from '../utils/pricing.ts';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateApplicationForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Store submission locally so it persists
      try {
        const stored = JSON.parse(localStorage.getItem('bw_event_applications') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('bw_event_applications', JSON.stringify(stored));
      } catch {
        // Fallback gracefully
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
  };

  return (
    <section id="application" className="relative w-full py-24 sm:py-32 bg-white text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <AnimatedGridLines />
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
                  href={`https://wa.me/971500000000?text=${encodeURIComponent(
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

              {/* Field: Package selection */}
              <div>
                <label htmlFor="packageId" className="block text-sm font-semibold text-[#0A192F] mb-2">
                  Выбранный формат участия <span className="text-[#E06D2B]">*</span>
                </label>
                <select
                  id="packageId"
                  name="packageId"
                  value={formData.packageId}
                  onChange={(e) => {
                    handleChange(e);
                    onPackageChange(e.target.value);
                  }}
                  className="w-full px-5 py-3.5 bg-white border border-[#E5E0D5] rounded-xl text-sm text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all"
                >
                  <option value="participant_single">
                    Участник — €85 (раннее бронирование) / €110 (стандартная цена)
                  </option>
                  <option value="breakdown_single">
                    Участник с разбором бизнеса — €150 (раннее) / €180 (стандарт, 1 место)
                  </option>
                  <option value="pair_both_regular">
                    Два участника без разбора (–20%) — €136 (раннее) / €176
                  </option>
                  <option value="pair_one_breakdown">
                    Один с разбором + один без разбора (–20%) — €188 (раннее) / €232
                  </option>
                  <option value="pair_two_breakdowns">
                    Два участника с отдельными разборами (–20%) — €240 (раннее) / €288
                  </option>
                </select>
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
                    placeholder="name@company.com"
                    className={`w-full px-5 py-3.5 bg-white border rounded-xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#E5E0D5]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 sm:py-5 text-sm sm:text-base font-bold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-lg hover:shadow-[#E06D2B]/30 hover:-translate-y-0.5 disabled:opacity-50"
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
