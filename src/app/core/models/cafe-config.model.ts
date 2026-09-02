export interface CafeSocialLink {
  platform: 'Facebook' | 'Instagram' | 'TikTok';
  url: string;
}

export interface CafeBusinessHour {
  day: string;
  hours: string;
}

export interface CafeTheme {
  primaryColor: string;
  primaryDarkColor: string;
  accentColor: string;

  darkColor: string;
  textColor: string;
  mutedColor: string;

  backgroundColor: string;
  surfaceColor: string;
  softColor: string;

  headingFont: string;
  bodyFont: string;

  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
}

export interface CafeConfig {
  theme: CafeTheme;

  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    logo: string;
  };

  contact: {
    phone: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    mapUrl: string;
    mapEmbedUrl: string;
  };

  socialLinks: CafeSocialLink[];

  businessHours: CafeBusinessHour[];

  home: {
    eyebrow: string;

    heroTitle: string;
    heroHighlight: string;

    heroDescription: string;

    heroImage: string;

    imageLabel: string;
    imageCaption: string;

    favoriteLabel: string;
    favoriteProduct: string;
    favoriteDescription: string;

    welcomeEyebrow: string;
    welcomeTitle: string;
    welcomeHighlight: string;

    welcomeParagraphOne: string;
    welcomeParagraphTwo: string;

    featuredEyebrow: string;
    featuredTitle: string;
    featuredHighlight: string;

    experienceEyebrow: string;
    experienceTitle: string;
    experienceHighlight: string;

    visitEyebrow: string;
    visitTitle: string;
    visitHighlight: string;
    visitDescription: string;
  };

  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    establishedYear: string;
  };
}
