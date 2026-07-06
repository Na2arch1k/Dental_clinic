/**
 * Central image manifest. Every photo is a real royalty-free Unsplash image
 * (all URLs verified). Swap an id here to change it everywhere.
 */
const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  /** Дзеркальна процедура крупним планом, темні тони — герой */
  hero: {
    src: u("photo-1606811841689-23dfddce3e95", 1400),
    alt: "Лікарка студії «Емаль» під час естетичної процедури",
  },
  /** Сучасний кабінет із бірюзовим кріслом */
  clinicRoom: {
    src: u("photo-1629909613654-28e377c37b09", 1600),
    alt: "Кабінет студії «Емаль» із сучасним стоматологічним кріслом",
  },
  /** Деталь обладнання кабінету */
  clinicDetail: {
    src: u("photo-1629909615184-74f495363b67", 1200),
    alt: "Стоматологічне обладнання у кабінеті студії",
  },
  /** Інтерʼєр клініки */
  clinicInterior: {
    src: u("photo-1598256989800-fe5f95da9787", 1600),
    alt: "Світлий інтерʼєр студії стоматології «Емаль»",
  },
  /** Лікар із планшетом — цифрова діагностика */
  techDigital: {
    src: u("photo-1576091160399-112ba8d25d1d", 1600),
    alt: "Лікар переглядає цифрову діагностику на планшеті",
  },
  /** Консультація лікаря з пацієнтом */
  techConsult: {
    src: u("photo-1579684385127-1ef15d508118", 1400),
    alt: "Лікар пояснює пацієнтові план лікування",
  },
  /** Лікар розмовляє з пацієнтом */
  patientCare: {
    src: u("photo-1537368910025-700350fe46c7", 1400),
    alt: "Лікар спілкується з пацієнтом перед процедурою",
  },
  /** Лікар у масці */
  doctorMask: {
    src: u("photo-1588776814546-1ffcf47267a5", 1200),
    alt: "Лікар студії «Емаль» у захисній масці",
  },
  /** Інструменти макро */
  toolsMacro: {
    src: u("photo-1588771930296-88c2cb03f386", 1200),
    alt: "Стоматологічні інструменти крупним планом",
  },
  /** Гігієна — зубна щітка */
  hygiene: {
    src: u("photo-1609840114035-3c981b782dfe", 1200),
    alt: "Засоби щоденної гігієни порожнини рота",
  },
  /** Результат — відкрита посмішка */
  smile: {
    src: u("photo-1580489944761-15a19d654956", 1200),
    alt: "Щира посмішка пацієнтки після лікування",
  },
} as const;

export const doctorPhotos = [
  {
    src: u("photo-1559839734-2b71ea197ec2", 1000),
    alt: "Оксана Литвин — засновниця та лікарка-ортопед",
  },
  {
    src: u("photo-1622253692010-333f2da6031d", 1000),
    alt: "Андрій Коваленко — хірург-імплантолог",
  },
  {
    src: u("photo-1594824476967-48c8b964273f", 1000),
    alt: "Марія Шевчук — лікарка-ортодонт",
  },
  {
    src: u("photo-1612349317150-e413f6a5b16d", 1000),
    alt: "Дмитро Бондар — ендодонтист",
  },
] as const;

export const avatarPhotos = [
  u("photo-1494790108377-be9c29b29330", 200),
  u("photo-1507003211169-0a1dd7228f2d", 200),
  u("photo-1438761681033-6461ffad8d80", 200),
  u("photo-1500648767791-00dcc994a43e", 200),
] as const;

export const servicePreviews: Record<string, { src: string; alt: string }> = {
  hygiene: img.hygiene,
  veneers: img.smile,
  implants: img.toolsMacro,
  ortho: img.clinicInterior,
  endo: img.hero,
  whitening: img.clinicRoom,
  kids: img.patientCare,
};
