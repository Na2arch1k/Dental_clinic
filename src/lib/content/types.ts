export type Locale = "uk" | "en";

export type NavItem = { label: string; href: string };

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
  };
  brand: {
    name: string;
    wordmark: string;
    fullName: string;
    tagline: string;
    city: string;
    phone: string;
    phoneHref: string;
    mobile: string;
    mobileHref: string;
    email: string;
    address: string;
    addressNote: string;
    mapUrl: string;
    instagram: string;
    facebook: string;
    hours: { day: string; time: string }[];
  };
  nav: NavItem[];
  header: {
    navAriaLabel: string;
    mobileNavAriaLabel: string;
    ctaLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  hero: {
    badgePrefix: string;
    headlineLines: [string, string, string];
    paragraph: string;
    ctaPrimary: string;
    ratingText: string;
    guaranteeText: string;
    ticker: string[];
    stats: { value: number; suffix: string; label: string }[];
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: string[];
    roomAlt: string;
    detailAlt: string;
    milestoneYear: string;
    milestoneCaption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      key: string;
      index: string;
      title: string;
      description: string;
      price: string;
    }[];
  };
  technology: {
    eyebrow: string;
    title: string;
    description: string;
    caption: string;
    imageAlt: string;
    features: { icon: string; title: string; text: string }[];
    highlight: { value: string; label: string; suffix: string };
  };
  doctors: {
    eyebrow: string;
    title: string;
    description: string;
    photoPlaceholder: string;
    items: {
      name: string;
      role: string;
      focus: string;
      experience: string;
      quote: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    steps: { index: string; title: string; text: string; duration: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    rating: string;
    ratingNote: string;
    prevAria: string;
    nextAria: string;
    tablistAria: string;
    tabAria: (index: number, name: string) => string;
    photoAlt: (name: string) => string;
    items: { name: string; treatment: string; quote: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  appointment: {
    eyebrow: string;
    title: string;
    text: string;
    serviceOptions: string[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      commentLabel: string;
      commentPlaceholder: string;
      submitIdle: string;
      submitSending: string;
      disclaimer: string;
    };
    hoursWeekday: string;
    hoursWeekend: string;
    success: { title: string; text: string };
  };
  footer: {
    description: string;
    sectionsLabel: string;
    contactsLabel: string;
    copyright: string;
    madeWith: string;
  };
  scrollTop: { aria: string };
  languageSwitcher: { aria: string };
};
