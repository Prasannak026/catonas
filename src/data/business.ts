// Business information for Catona's Ice Cream
export const businessInfo = {
  name: "Catona's Ice Cream",
  tagline: "Crafted with passion. Served with love.",
  location: "Painesville, Ohio",
  address: "123 Main St, Painesville, OH 44077",
  phone: "(440) 555-0123",
  email: "hello@catonasicecream.com",
  founded: 1985,
  hours: {
    weekday: "12:00 PM - 10:00 PM",
    weekend: "11:00 AM - 11:00 PM",
  },
  rating: 4.9,
  reviews: 342,
  social: {
    instagram: "https://instagram.com/catonasicecream",
    facebook: "https://facebook.com/catonasicecream",
  },
};

// Menu flavors organized by category
export const menuFlavors = [
  {
    id: 1,
    name: "Vanilla Bean",
    category: "Classic",
    description: "Creamy Madagascar vanilla with real bean specks",
    color: "from-amber-200 to-amber-100",
    icon: "☀️",
  },
  {
    id: 2,
    name: "Chocolate Decadence",
    category: "Classic",
    description: "Rich, dark chocolate for chocolate lovers",
    color: "from-amber-800 to-amber-900",
    icon: "🍫",
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    category: "Fruit",
    description: "Fresh strawberry puree with real fruit pieces",
    color: "from-rose-200 to-rose-300",
    icon: "🍓",
  },
  {
    id: 4,
    name: "Pistachio Dream",
    category: "Nut",
    description: "Natural pistachio with a subtle nutty richness",
    color: "from-green-200 to-green-300",
    icon: "🥜",
  },
  {
    id: 5,
    name: "Salted Caramel",
    category: "Indulgence",
    description: "Sweet caramel swirls with sea salt finishing",
    color: "from-yellow-600 to-amber-600",
    icon: "🧂",
  },
  {
    id: 6,
    name: "Mint Chocolate Chip",
    category: "Classic",
    description: "Cool mint with dark chocolate chips",
    color: "from-green-100 to-green-200",
    icon: "🍃",
  },
  {
    id: 7,
    name: "Lavender Honey",
    category: "Specialty",
    description: "Delicate lavender infused with local honey",
    color: "from-purple-200 to-purple-300",
    icon: "🌸",
  },
  {
    id: 8,
    name: "Cookies & Cream",
    category: "Indulgence",
    description: "Vanilla ice cream loaded with cookie chunks",
    color: "from-gray-100 to-gray-200",
    icon: "🍪",
  },
  {
    id: 9,
    name: "Mango Sorbet",
    category: "Fruit",
    description: "Refreshing mango sorbet for a tropical escape",
    color: "from-orange-200 to-orange-300",
    icon: "🥭",
  },
  {
    id: 10,
    name: "Espresso",
    category: "Specialty",
    description: "Bold espresso flavor with coffee bean pieces",
    color: "from-amber-900 to-gray-900",
    icon: "☕",
  },
  {
    id: 11,
    name: "Cotton Candy",
    category: "Fun",
    description: "Sweet nostalgic cotton candy magic",
    color: "from-pink-200 to-pink-300",
    icon: "🍭",
  },
  {
    id: 12,
    name: "Banana Foster",
    category: "Indulgence",
    description: "Caramelized bananas with buttery sauce",
    color: "from-yellow-200 to-yellow-300",
    icon: "🍌",
  },
];

// Seasonal specials
export const seasonalSpecials = [
  {
    id: 1,
    title: "Summer Citrus Blast",
    description: "Limited edition lemon and lime sorbet duo",
    season: "Summer",
    flavor: "Citrus",
    endDate: "August 31",
  },
  {
    id: 2,
    title: "Fall Pumpkin Spice",
    description: "Creamy pumpkin with warm spices",
    season: "Fall",
    flavor: "Pumpkin Spice",
    endDate: "October 31",
  },
  {
    id: 3,
    title: "Winter Peppermint",
    description: "Fresh peppermint with dark chocolate chunks",
    season: "Winter",
    flavor: "Peppermint",
    endDate: "December 31",
  },
  {
    id: 4,
    title: "Spring Berry Mix",
    description: "Blueberry and blackberry swirled together",
    season: "Spring",
    flavor: "Berry Mix",
    endDate: "May 31",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    text: "The best ice cream in Painesville! The flavors are always creative and the service is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Davis",
    text: "Been coming here for years. The quality is consistent and the atmosphere is always welcoming.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    text: "My kids absolutely love Catona's. The salted caramel is my personal favorite!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    text: "Perfect spot for a date night or family outing. Highly recommend the pistachio flavor.",
    rating: 5,
  },
];

// Gallery images (placeholder descriptions for now)
export const gallery = [
  {
    id: 1,
    title: "Colorful Ice Cream Cones",
    description: "Our signature ice cream cones in vibrant colors",
  },
  {
    id: 2,
    title: "Ice Cream Parlor Interior",
    description: "Cozy and welcoming interior space",
  },
  {
    id: 3,
    title: "Fresh Fruit Toppings",
    description: "Quality ingredients we use for our creations",
  },
  {
    id: 4,
    title: "Sundae Masterpieces",
    description: "Beautifully crafted sundaes",
  },
  {
    id: 5,
    title: "Seasonal Flavors",
    description: "Our rotating seasonal specials",
  },
  {
    id: 6,
    title: "Family Moments",
    description: "Creating sweet memories since 1985",
  },
];

// Navigation menu
export const navMenu = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Specials", href: "#specials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

// JSON-LD structured data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  name: businessInfo.name,
  description: businessInfo.tagline,
  url: "https://catonasicecream.com",
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address,
    addressLocality: "Painesville",
    addressRegion: "OH",
    postalCode: "44077",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: businessInfo.rating,
    reviewCount: businessInfo.reviews,
  },
  sameAs: [businessInfo.social.instagram, businessInfo.social.facebook],
  foundingDate: businessInfo.founded.toString(),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
  ],
};
