import { CafeConfig } from '../models/cafe-config.model';

export const CAFE_CONFIG: CafeConfig = {
  theme: {
    primaryColor: '#9c6b43',
    primaryDarkColor: '#765033',
    accentColor: '#d7b58c',

    darkColor: '#211912',
    textColor: '#4d4037',
    mutedColor: '#7e7066',

    backgroundColor: '#fffaf4',
    surfaceColor: '#ffffff',
    softColor: '#f5ebe0',

    headingFont: "'Playfair Display', serif",
    bodyFont: "'DM Sans', sans-serif",

    borderRadiusSmall: '8px',
    borderRadiusMedium: '16px',
    borderRadiusLarge: '26px',
  },

  brand: {
    name: 'Café Craft',
    shortName: 'CC',

    tagline: 'Made for coffee moments',

    description:
      'Handcrafted coffee, comforting flavors, and a welcoming place for the moments that matter.',

    logo: '',
  },

  contact: {
    phone: '+63 912 345 6789',

    email: 'hello@cafecraft.com',

    addressLine1: '123 Coffee Street',

    addressLine2: 'Quezon City, Metro Manila',

    mapUrl: 'https://www.google.com/maps',

    mapEmbedUrl: 'https://www.google.com/maps?q=Quezon%20City%20Philippines&output=embed',
  },

  socialLinks: [
    {
      platform: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com',
    },
    {
      platform: 'TikTok',
      url: 'https://tiktok.com',
    },
  ],

  businessHours: [
    {
      day: 'Monday',
      hours: '7:00 AM – 9:00 PM',
    },
    {
      day: 'Tuesday',
      hours: '7:00 AM – 9:00 PM',
    },
    {
      day: 'Wednesday',
      hours: '7:00 AM – 9:00 PM',
    },
    {
      day: 'Thursday',
      hours: '7:00 AM – 9:00 PM',
    },
    {
      day: 'Friday',
      hours: '7:00 AM – 10:00 PM',
    },
    {
      day: 'Saturday',
      hours: '8:00 AM – 10:00 PM',
    },
    {
      day: 'Sunday',
      hours: '8:00 AM – 8:00 PM',
    },
  ],

  home: {
    eyebrow: 'Freshly brewed every day',

    heroTitle: 'Coffee made for',
    heroHighlight: 'better moments.',

    heroDescription:
      'Handcrafted coffee, comforting food, and a warm space made for slow mornings, productive afternoons, and conversations worth having.',

    heroImage: 'assets/images/cafe/hero-coffee.webp',

    imageLabel: 'CAFÉ CRAFT',

    imageCaption: 'Freshly brewed moments.',

    favoriteLabel: 'Customer favorite',

    favoriteProduct: 'Caramel Latte',

    favoriteDescription: 'Rich • Creamy • Smooth',

    welcomeEyebrow: 'WELCOME TO CAFÉ CRAFT',

    welcomeTitle: 'Your neighborhood café,',

    welcomeHighlight: 'crafted differently.',

    welcomeParagraphOne:
      'Café Craft is about more than serving coffee. It is about creating a comfortable place where people can start their morning, catch up with friends, focus on work, or simply enjoy a quiet moment.',

    welcomeParagraphTwo:
      'From carefully prepared drinks to freshly served café favorites, everything we make is designed to turn an ordinary coffee break into something worth looking forward to.',

    featuredEyebrow: 'CAFÉ FAVORITES',

    featuredTitle: 'Made to become',

    featuredHighlight: 'your favorite.',

    experienceEyebrow: 'THE CAFÉ CRAFT EXPERIENCE',

    experienceTitle: 'The simple things',

    experienceHighlight: 'matter most.',

    visitEyebrow: 'COME SAY HELLO',

    visitTitle: 'Your next coffee',

    visitHighlight: 'is waiting.',

    visitDescription:
      'Stop by Café Craft and make a little more room in your day for good coffee and good moments.',
  },

  about: {
    eyebrow: 'OUR STORY',

    title: 'More than coffee.',

    highlight: 'A place to belong.',

    description:
      'Café Craft was created around one simple idea: great coffee feels even better when it is shared in a warm and welcoming space.',

    establishedYear: '2026',
  },
};
