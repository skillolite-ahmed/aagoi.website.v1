export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Aagoi',
  tagline: 'Moving Your Career Forward.',
  website: 'https://aagoi.in',
  status: 'EARLY ACCESS',
  introLabel: 'PERSONALISED CAREER SUPPORT',
  description:
    'Discover Aagoi, an early-stage career-technology initiative offering personalised career support for professionals with 5+ years of total professional work experience, including managers, senior specialists and business leaders, while developing a broader connected career ecosystem.',
  
  // Official Two Distinct Form Destinations
  forms: {
    client: 'https://forms.gle/TwFJn46dcSRjpyXh9',
    partnership: 'https://forms.gle/r735TNUF4Y8gwbf79',
  },

  // Official Verified Contact Channels
  contact: {
    email: 'founder@aagoi.in',
    phone: '+91 9707146758',
    phoneDisplay: '+91 9707146758',
    mailto: 'mailto:founder@aagoi.in',
    tel: 'tel:+919707146758',
  },

  // Navigation Links
  navItems: [
    { label: 'Our Services', href: '#approach' },
    { label: 'Our Process', href: '#values' },
    { label: 'Who We Help', href: '#audience' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],

  // Brand Color Palette (Hex Codes)
  colors: {
    deepNavy: '#152D46',
    primaryBlue: '#1269A8',
    brightBlue: '#1686D9',
    teal: '#17A6A0',
    offWhite: '#F7F9FC',
    white: '#FFFFFF',
    secondarySlate: '#526477',
    lightBorder: '#E5EAF0',
  },
} as const;
