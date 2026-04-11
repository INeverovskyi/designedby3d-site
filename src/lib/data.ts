export interface HeroSlide {
  heading: string;
  subheading: string;
  cta: string;
  ctaLink: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    heading: "Custom Made Costumes & Props",
    subheading: "Looking for a custom made costume or a prop? We can do almost everything! Just message us.",
    cta: "Contact Us",
    ctaLink: "/commissions",
  },
  {
    heading: "DO-IT-YOURSELF Models!",
    subheading: "New every month! Get DIY kits and build your own cosplay props.",
    cta: "Explore DIY Kits",
    ctaLink: "https://designedby3d.com/product-category/other/diy-kit/",
  },
  {
    heading: "Props, Costumes & Helmets",
    subheading: "We do props, costumes, helmets and many other! Check out what we have.",
    cta: "Browse Shop",
    ctaLink: "https://designedby3d.com/shop/",
  },
  {
    heading: "3D Models for Sale!",
    subheading: "Already cut and ready for 3D printing! Download and print at home.",
    cta: "Check Out Models",
    ctaLink: "https://designedby3d.com/product-category/3d-models-for-3d-printing/",
  },
  {
    heading: "Some Products Have Gifts!",
    subheading: "Check the description carefully and find bonus items with your purchase.",
    cta: "Find Gifts",
    ctaLink: "https://designedby3d.com/shop/",
  },
];

export interface CategoryItem {
  name: string;
  href: string;
  image: string;
}

export const FEATURED_CATEGORIES: CategoryItem[] = [
  { name: "Overwatch", href: "https://designedby3d.com/product-category/overwatch/", image: "/images/categories/overwatch.jpg" },
  { name: "Star Wars", href: "https://designedby3d.com/product-category/star-wars/", image: "/images/categories/starwars.jpg" },
  { name: "World of Warcraft", href: "https://designedby3d.com/product-category/world-of-warcraft/", image: "/images/categories/wow.jpg" },
  { name: "Apex Legends", href: "https://designedby3d.com/product-category/apex-legends/", image: "/images/categories/apex.jpg" },
  { name: "Destiny", href: "https://designedby3d.com/product-category/destiny/", image: "/images/categories/destiny.jpg" },
  { name: "Helldivers 2", href: "https://designedby3d.com/product-category/helldivers-2/", image: "/images/categories/helldivers.jpg" },
  { name: "Valorant", href: "https://designedby3d.com/product-category/valorant/", image: "/images/categories/valorant.jpg" },
  { name: "Marvel", href: "https://designedby3d.com/product-category/marvel/", image: "/images/categories/marvel.jpg" },
];

export interface ProductItem {
  name: string;
  href: string;
  image: string;
  price: string;
  salePrice?: string;
}

export const SALE_PRODUCTS: ProductItem[] = [
  { name: "Mercy Wings Sigrun Skin", href: "https://designedby3d.com/shop/", image: "/images/products/mercy-wings.jpg", price: "$299", salePrice: "$249" },
  { name: "Viper Mask from Valorant", href: "https://designedby3d.com/shop/", image: "/images/products/viper-mask.jpg", price: "$129", salePrice: "$99" },
  { name: "Mandalorian Blacksmith Helmet", href: "https://designedby3d.com/shop/", image: "/images/products/mandalorian.jpg", price: "$349", salePrice: "$299" },
  { name: "Cassidy's Peacekeeper Revolver", href: "https://designedby3d.com/shop/", image: "/images/products/peacekeeper.jpg", price: "$179", salePrice: "$149" },
  { name: "Sheriff Revolver from Valorant", href: "https://designedby3d.com/shop/", image: "/images/products/sheriff.jpg", price: "$149", salePrice: "$119" },
  { name: "Ghost Pistol from Valorant", href: "https://designedby3d.com/shop/", image: "/images/products/ghost.jpg", price: "$129", salePrice: "$99" },
  { name: "VK-47 Flatline from Apex Legends", href: "https://designedby3d.com/shop/", image: "/images/products/flatline.jpg", price: "$249", salePrice: "$199" },
  { name: "Kiriko Kunai and Ofuda Props", href: "https://designedby3d.com/shop/", image: "/images/products/kiriko.jpg", price: "$89", salePrice: "$69" },
];

export const WORK_STEPS = [
  {
    step: 1,
    title: "Browse & Order",
    description: "You buy a product or message us if you have a custom request.",
  },
  {
    step: 2,
    title: "Discuss Details",
    description: "We discuss all details, questions and payment options.",
  },
  {
    step: 3,
    title: "Confirm & Pay",
    description: "All details are clarified and you pay for the order.",
  },
  {
    step: 4,
    title: "Production",
    description: "Production is started, work in progress pictures are available!",
  },
  {
    step: 5,
    title: "Delivery",
    description: "We ship your package, you receive it! +1 happy customer.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How to place an order?",
    answer:
      "Contact us! After all the details are discussed, we make a custom lot for you on our website.",
  },
  {
    question: "Where do you ship and how?",
    answer:
      "We ship worldwide, all our packages are well-packed and have tracking info. Usually shipping takes 8-20 days.",
  },
  {
    question: "What do you need to start a commission?",
    answer:
      "We need your pictures (design) of the costume or prop, an order placed to start, and some information which we should discuss.",
  },
  {
    question: "What items do you make?",
    answer:
      "We do almost everything! Helmets, weapons, full costumes, armor sets, masks, accessories, and more from any game, movie, or anime.",
  },
  {
    question: "How long does it take to make a prop or a costume?",
    answer:
      "It depends on the complexity and queue of orders. If you have a deadline, we always try to meet it. Minimum production time is 4-5 weeks.",
  },
  {
    question: "Can I have pictures of progress on my commission?",
    answer:
      "Yes, sure! You can message us any time and we will show you the progress on your order.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use high quality materials: human-friendly plastic, cloth, EVA foam, leather, silicone molds, 3D printing, and professional paint.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and bank transfers. Payment plans are available for larger orders.",
  },
];

export const ABOUT_POINTS = [
  "Our team is a team of experienced people who really love their work. That is why we do our items with imagination, as we would do it for ourselves.",
  "We use high quality materials: human-friendly plastic, cloth, EVA foam, leather, paint, and 3D printing technology.",
  "We can produce for you a product of almost any complexity.",
  "We are professionals in our field with 6+ years of experience.",
];
