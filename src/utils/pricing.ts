export interface TicketPricing {
  id: string;
  name: string;
  category: 'single' | 'pair';
  earlyPrice: number;
  standardPrice: number;
  description: string;
  seatsTotal?: number;
  seatsAvailable?: number;
  breakdownIncluded: number;
}

export const TICKET_PACKAGES: Record<string, TicketPricing> = {
  participant_single: {
    id: 'participant_single',
    name: 'Участник',
    category: 'single',
    earlyPrice: 85,
    standardPrice: 110,
    description: 'Для тех, кто хочет разобраться в системе привлечения клиентов, участвовать в профессиональной дискуссии и расширить деловое окружение.',
    breakdownIncluded: 0,
  },
  breakdown_single: {
    id: 'breakdown_single',
    name: 'Участник с разбором бизнеса',
    category: 'single',
    earlyPrice: 150,
    standardPrice: 180,
    description: 'Для тех, кто хочет вынести собственную задачу на профессиональный разбор и определить приоритеты изменений.',
    seatsTotal: 3,
    seatsAvailable: 1, // Only 3 total, 1 spot remaining in early booking
    breakdownIncluded: 1,
  },
  pair_both_regular: {
    id: 'pair_both_regular',
    name: 'Два участника без разбора',
    category: 'pair',
    earlyPrice: 136,
    standardPrice: 176,
    description: 'Формат для двоих со скидкой 20%. Два билета «Участник».',
    breakdownIncluded: 0,
  },
  pair_one_breakdown: {
    id: 'pair_one_breakdown',
    name: 'Один участник с разбором + один без разбора',
    category: 'pair',
    earlyPrice: 188,
    standardPrice: 232,
    description: 'Формат для двоих со скидкой 20%. Один разбор на компанию + второй билет.',
    breakdownIncluded: 1,
  },
  pair_two_breakdowns: {
    id: 'pair_two_breakdowns',
    name: 'Два участника, каждый с отдельным разбором',
    category: 'pair',
    earlyPrice: 240,
    standardPrice: 288,
    description: 'Формат для двоих со скидкой 20%. Полноценный отдельный разбор для каждого участника.',
    breakdownIncluded: 2,
  },
};

export const EVENT_STATS = {
  totalSeats: 20,
  earlyBirdRemaining: 3, // Out of first 8
  breakdownsTotal: 3,
  breakdownsRemaining: 1,
  currency: '€',
  location: 'Дубай, Downtown / DIFC',
  time: '10:00 – 13:00 (утренний формат)',
  month: 'Ноябрь',
};

export function getTicketPrice(packageId: string, isEarlyBird: boolean = true): number {
  const pkg = TICKET_PACKAGES[packageId];
  if (!pkg) return 85;
  return isEarlyBird ? pkg.earlyPrice : pkg.standardPrice;
}

export function formatPrice(amount: number): string {
  return `€${amount}`;
}

export function calculatePairSavings(regularSingleSum: number, pairPrice: number): number {
  return regularSingleSum - pairPrice;
}
