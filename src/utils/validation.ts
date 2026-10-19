export interface ApplicationFormData {
  fullName: string;
  website: string;
  role: string;
  averageCheck: string;
  mainChallenge: string;
  packageId: string;
  whatsapp: string;
  email: string;
  pairPartnerName?: string;
}

export interface ValidationErrors {
  fullName?: string;
  website?: string;
  role?: string;
  averageCheck?: string;
  mainChallenge?: string;
  whatsapp?: string;
  email?: string;
}

export function validateApplicationForm(data: ApplicationFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Укажите ваши имя и фамилию';
  }

  if (!data.website || data.website.trim().length < 3) {
    errors.website = 'Укажите сайт или рабочий профиль компании';
  }

  if (!data.role || data.role.trim().length < 2) {
    errors.role = 'Укажите вашу роль в компании (например: основатель, коммерческий директор)';
  }

  if (!data.averageCheck || data.averageCheck.trim().length < 2) {
    errors.averageCheck = 'Укажите средний чек продукта или услуги';
  }

  if (!data.mainChallenge || data.mainChallenge.trim().length < 10) {
    errors.mainChallenge = 'Опишите главную задачу в маркетинге или продажах (минимум 10 символов)';
  }

  const phoneRegex = /^[\d+()\- \s]{8,25}$/;
  if (!data.whatsapp || !phoneRegex.test(data.whatsapp.trim())) {
    errors.whatsapp = 'Укажите корректный номер WhatsApp для связи (+971...)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Укажите корректный адрес электронной почты';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
