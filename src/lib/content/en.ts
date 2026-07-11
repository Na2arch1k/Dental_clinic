import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "Emal Aesthetic Dentistry Studio — Kyiv",
    description:
      "A boutique aesthetic dentistry studio in the heart of Kyiv: digital diagnostics, microscope-assisted treatment, veneers, implants. Honest fixed-price plans with up to a 5-year warranty.",
    ogTitle: "Emal Aesthetic Dentistry Studio — a smile you'll want to show off",
    ogDescription:
      "Digital diagnostics, microscope-assisted treatment, and honest fixed-price plans. Kyiv, 49A Volodymyrska St.",
    ogLocale: "en_US",
  },
  brand: {
    name: "Emal",
    wordmark: "EMAL",
    fullName: "Emal Aesthetic Dentistry Studio",
    tagline: "Aesthetic Dentistry",
    city: "Kyiv",
    phone: "+38 (044) 334 60 32",
    phoneHref: "tel:+380443346032",
    mobile: "+38 (067) 334 60 32",
    mobileHref: "tel:+380673346032",
    email: "hello@emal.dental",
    address: "49A Volodymyrska St.",
    addressNote: "3 minutes on foot from Zoloti Vorota metro station",
    mapUrl: "https://maps.google.com/?q=49A+Volodymyrska+St,+Kyiv",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    hours: [
      { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
      { day: "Saturday", time: "10:00 AM – 4:00 PM" },
      { day: "Sunday", time: "closed" },
    ],
  },
  nav: [
    { label: "Clinic", href: "#clinic" },
    { label: "Services", href: "#services" },
    { label: "Technology", href: "#technology" },
    { label: "Doctors", href: "#doctors" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacts", href: "#appointment" },
  ],
  header: {
    navAriaLabel: "Main navigation",
    mobileNavAriaLabel: "Mobile navigation",
    ctaLabel: "Book now",
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",
  },
  hero: {
    badgePrefix: "Now accepting new patients",
    headlineLines: ["A smile", "you'll love", "to show off"],
    paragraph:
      "Emal is an aesthetic dentistry studio in the heart of Kyiv. Digital diagnostics, microscope-assisted treatment, and honest fixed-price plans — no pain, no rush, no fine print.",
    ctaPrimary: "Book an appointment",
    ratingText: "1,200+ reviews on Google",
    guaranteeText: "Up to a 5-year warranty",
    ticker: [
      "Hygiene & prevention",
      "Veneers & restorations",
      "3D-guided implants",
      "Aligners & braces",
      "Microscope-assisted treatment",
      "Sensitivity-free whitening",
      "Pediatric dentistry",
    ],
    stats: [
      { value: 14, suffix: "", label: "years in private practice" },
      { value: 11200, suffix: "+", label: "patients trusted us with their smile" },
      { value: 98, suffix: "%", label: "return for regular check-ups" },
    ],
    imageAlt: "A doctor at Emal studio performing an aesthetic procedure",
  },
  about: {
    eyebrow: "Clinic",
    title: "Dentistry that feels calm",
    paragraphs: [
      "Emal is a boutique studio on Volodymyrska Street: four treatment rooms, our own lab, and a team where every doctor focuses on a single specialty. We chose not to become a chain on purpose — so we know every patient by name and take personal responsibility for the result.",
      "We don't treat 'just in case' or scare you with diagnoses. First comes full digital diagnostics, then a clear plan with a fixed price. You always know exactly what we're doing and why.",
    ],
    points: [
      "The treatment plan price is fixed in the contract",
      "Up to a 5-year written warranty on our work",
      "Our sterilization area is open for patients to see",
    ],
    roomAlt: "A treatment room at Emal studio with a modern dental chair",
    detailAlt: "Dental equipment in the studio's treatment room",
    milestoneYear: "2012",
    milestoneCaption: "the year we welcomed our first patient on Volodymyrska Street",
  },
  services: {
    eyebrow: "Services",
    title: "Everything for a healthy smile, under one roof",
    description:
      "From routine hygiene to a full smile makeover. Prices below are a guide — you'll know the exact cost after diagnostics, before treatment begins.",
    items: [
      {
        key: "hygiene",
        index: "01",
        title: "Hygiene & prevention",
        description:
          "Ultrasound + Air Flow: a gentle professional clean in 60 minutes. The best investment in the health of your teeth.",
        price: "from ₴1,900",
      },
      {
        key: "veneers",
        index: "02",
        title: "Veneers & restorations",
        description:
          "Ceramic veneers and composite restorations indistinguishable from your own teeth — in photos or in person.",
        price: "from ₴14,000",
      },
      {
        key: "implants",
        index: "03",
        title: "Implants",
        description:
          "We plan in 3D and work from a surgical guide, so the implant lands exactly right the first time.",
        price: "from ₴32,000",
      },
      {
        key: "ortho",
        index: "04",
        title: "Orthodontics",
        description:
          "Clear aligners and modern braces for adults and teens. You see the projected result before you even start.",
        price: "from ₴90,000",
      },
      {
        key: "endo",
        index: "05",
        title: "Microscope-assisted treatment",
        description:
          "Endodontics at ×25 magnification. We save teeth that other clinics would suggest extracting.",
        price: "from ₴4,500",
      },
      {
        key: "whitening",
        index: "06",
        title: "Whitening",
        description:
          "In-office protocols that brighten enamel by 4–8 shades in a single visit — no pain, no sensitivity.",
        price: "from ₴7,500",
      },
      {
        key: "kids",
        index: "07",
        title: "Pediatric dentistry",
        description:
          "A first visit without tears: adaptation sessions, play-based care, and doctors who know how to work with kids.",
        price: "from ₴900",
      },
    ],
  },
  technology: {
    eyebrow: "Technology",
    title: "Equipment surgeons trust",
    description:
      "We equipped the studio so the diagnosis never relies on guesswork: everything needed for an accurate treatment plan, in one place, in a single visit.",
    caption: "The doctor makes the diagnosis. The technology gathers the data for it.",
    imageAlt: "A doctor showing a patient the results of a digital tooth scan",
    features: [
      {
        icon: "Scan",
        title: "CBCT scanner",
        text: "A 3D scan of the entire jaw in 20 seconds, with 10 times less radiation than a traditional film X-ray.",
      },
      {
        icon: "Microscope",
        title: "Operating microscope",
        text: "×25 magnification reveals canals invisible to the naked eye, helping us preserve living tissue.",
      },
      {
        icon: "ScanFace",
        title: "Intraoral scanner",
        text: "Digital impressions with no messy trays or putty — faster, more accurate, and far more comfortable.",
      },
      {
        icon: "FlaskConical",
        title: "In-house lab",
        text: "Veneers and crowns are made right behind the wall, not shipped from another city. Turnaround from 5 days.",
      },
    ],
    highlight: {
      value: "×25",
      label: "operating microscope magnification",
      suffix: "we see what the eye cannot",
    },
  },
  doctors: {
    eyebrow: "Team",
    title: "Doctors who each focus on one specialty",
    description:
      "We have no generalists here. Every case is led by a dedicated specialist, so one doctor is personally accountable for the result.",
    items: [
      {
        name: "Oksana Lytvyn",
        role: "Founder, Prosthodontist",
        focus: "Veneers, full smile reconstructions",
        experience: "18 years in practice",
        quote: "The best work is the kind no one notices. All they notice is the smile.",
      },
      {
        name: "Andriy Kovalenko",
        role: "Implant surgeon",
        focus: "Implants, bone grafting",
        experience: "14 years in practice",
        quote: "Implantology is math. I simply don't leave it any room for chance.",
      },
      {
        name: "Mariya Shevchuk",
        role: "Orthodontist",
        focus: "Aligners, braces",
        experience: "11 years in practice",
        quote: "Straight teeth are a nice bonus. What matters is a healthy bite for life.",
      },
      {
        name: "Dmytro Bondar",
        role: "Endodontist",
        focus: "Microscope-assisted root canal treatment",
        experience: "9 years in practice",
        quote: "My favorite diagnosis is 'we managed to save the tooth.'",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Five steps to your result",
    intro:
      "You always know what's happening now and what comes next — no surprises in the chair, and none on the bill.",
    cta: "Start with a consultation",
    steps: [
      {
        index: "01",
        title: "Meet & examine",
        text: "We share a coffee, listen, and examine. No pressure to buy — just an honest conversation about the state of your teeth.",
        duration: "45 minutes",
      },
      {
        index: "02",
        title: "Digital diagnostics",
        text: "CBCT scan, photo protocol, and intraoral scanning. A full picture of your teeth — no guesswork, no 'we'll see as we go.'",
        duration: "20 minutes",
      },
      {
        index: "03",
        title: "Plan & estimate",
        text: "We explain the options in plain language, show you the projected result, and fix the price in a contract.",
        duration: "1 visit",
      },
      {
        index: "04",
        title: "Treatment",
        text: "Computer-controlled anesthesia and an unhurried pace: most patients just watch a show in the chair.",
        duration: "per plan",
      },
      {
        index: "05",
        title: "Aftercare",
        text: "Free check-ups throughout the year. We remind you ourselves, so it's one less thing to keep in mind.",
        duration: "12 months",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our patients say",
    rating: "4.9",
    ratingNote: "average Google rating from 1,200+ reviews",
    prevAria: "Previous review",
    nextAria: "Next review",
    tablistAria: "Reviews",
    tabAria: (i, name) => `Review ${i}: ${name}`,
    photoAlt: (name) => `Patient photo: ${name}`,
    items: [
      {
        name: "Iryna Honcharuk",
        treatment: "Six ceramic veneers",
        quote:
          "The hardest part of the whole process was choosing the shade. The team handled everything else so smoothly I never once worried. My colleagues are still convinced these are my natural teeth.",
      },
      {
        name: "Oleh Melnyk",
        treatment: "Implants for two teeth",
        quote:
          "They showed me on a 3D model exactly where the implants would sit before the surgery. The procedure itself took an hour with zero pain. Four months later I'd already forgotten which teeth were implants.",
      },
      {
        name: "Kateryna Savchuk",
        treatment: "Aligners, 14 months",
        quote:
          "I'm an adult and absolutely did not want braces. You can't see the aligners in photos at all. Mariya adjusted the plan twice, and not once did I hear a word of reproach.",
      },
      {
        name: "Taras Lytvynenko",
        treatment: "Microscope-assisted root canal treatment",
        quote:
          "Two other clinics told me to extract it. Dmytro looked under the microscope and said, 'we're saving it.' Two years later the tooth is still there and gives me no trouble.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions we hear most often",
    intro:
      "Didn't find your answer? Give us a call — our coordinator will answer anything that's on your mind.",
    items: [
      {
        question: "How much does the first consultation cost?",
        answer:
          "Meeting the doctor and the initial exam are free. If an accurate plan requires diagnostics (CBCT, scanning), it costs ₴1,200, and we credit that amount toward the cost of your future treatment.",
      },
      {
        question: "Is it really painless?",
        answer:
          "Yes. We use STA computer-controlled anesthesia: the numbing agent is delivered slowly and precisely, so even the injection itself isn't unpleasant. For anxious patients we also offer sedation — you doze comfortably while we work.",
      },
      {
        question: "Can I pay for treatment in installments?",
        answer:
          "Yes, plans from ₴20,000 qualify for an in-house installment plan of up to 10 months with no markup and no banks involved. The payment schedule is fixed in the contract along with the price.",
      },
      {
        question: "What warranty do you offer?",
        answer:
          "A written one: up to 5 years on prosthetic work and implants, 2 years on restorations. The warranty is valid as long as you attend check-ups every six months — we'll remind you ourselves.",
      },
      {
        question: "How long does an implant take?",
        answer:
          "The surgery itself takes 30–60 minutes per implant. The full cycle including the crown is 3–4 months — the time the bone needs to integrate the implant securely. We fit a temporary crown right away if needed.",
      },
      {
        question: "How should I prepare for my first visit?",
        answer:
          "No preparation needed — just come in. If you have X-rays or records from other clinics, bring them along to speed up diagnostics. There's no need to arrive fasting.",
      },
    ],
  },
  appointment: {
    eyebrow: "Booking",
    title: "Schedule your first visit",
    text: "Leave your number and our coordinator will call you back within 15 minutes during business hours, find a convenient slot, and answer your questions. It's completely non-binding.",
    serviceOptions: [
      "Consultation & exam",
      "Professional hygiene",
      "Veneers / aesthetics",
      "Implants",
      "Orthodontics (aligners, braces)",
      "Tooth treatment",
      "Pediatric dentistry",
      "Something else",
    ],
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone number",
      phonePlaceholder: "+38 (0__) ___ __ __",
      serviceLabel: "What are you interested in",
      servicePlaceholder: "What are you interested in?",
      commentLabel: "Comment",
      commentPlaceholder: "Comment or a convenient time to call (optional)",
      submitIdle: "Send request",
      submitSending: "Sending…",
      disclaimer:
        "By submitting this form, you agree to the processing of your personal data. We only call regarding your appointment.",
    },
    hoursWeekday: "Mon–Fri 9:00 AM–8:00 PM",
    hoursWeekend: "Sat 10:00 AM–4:00 PM · Sun — closed",
    success: {
      title: "Request received",
      text: "Thank you! We'll call you back within 15 minutes during business hours to find a time that works for you.",
    },
  },
  footer: {
    description:
      "A boutique aesthetic dentistry studio in the heart of Kyiv. Honest treatment plans, digital precision, and results we stand behind in writing.",
    sectionsLabel: "Sections",
    contactsLabel: "Contacts",
    copyright: "© 2026 Emal Aesthetic Dentistry Studio. Licensed by the Ministry of Health of Ukraine.",
    madeWith: "Made with micron precision.",
  },
  scrollTop: { aria: "Scroll to top" },
  languageSwitcher: { aria: "Change language" },
};
