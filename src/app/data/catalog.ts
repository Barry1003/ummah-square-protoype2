import type { Product, Service, Sponsor, Store } from './types';

/**
 * The Ummah Square catalogue — vendors, products and services taken from the
 * live marketplace at ummahsquare.shop. Slugs match the real vendor
 * subdomains (e.g. pleaznscents.ummahsquare.shop), so /store/pleaznscents here
 * is the same shop as in production.
 *
 * Nothing here is invented: names, prices, categories, locations and imagery
 * are the vendors' own. Where the live site publishes no rating, none is shown
 * — the marketplace signals are "Top Rated" and "Available", as in production.
 */

const CDN = 'https://cdn.ummahsquare.shop/vendors';
const CLOUD = 'https://res.cloudinary.com/djdwsjt45/image/upload';

/* ── Vendors ──────────────────────────────────────────────────────── */

export const STORES: Store[] = [
  {
    id: 'hismercycroch',
    name: 'His Mercy Croché',
    initials: 'HM',
    category: 'Arts, Crafts & Gifts',
    tagline: 'Handmade crochet pieces and the tools to make your own',
    location: 'Iyana Iyesi',
    logoGradient: 'from-rose-500 to-pink-500',
    logo: `${CDN}/6a5a6b7b7a2057fcb75f4de7/branding/logo/logo-1784360229345.webp`,
    banner: `${CDN}/6a5a6b7b7a2057fcb75f4de7/branding/banner/banner-1784360232430.png`,
    topRated: true,
    available: true,
    startingPrice: 650,
  },
  {
    id: 'feescrochet',
    name: "Fee's Crochet",
    initials: 'FC',
    category: 'Arts, Crafts & Gifts',
    tagline: 'Crochet bags, clips and bookmarks, made to order',
    location: 'Magodo GRA Phase II',
    logoGradient: 'from-fuchsia-500 to-purple-500',
    logo: `${CDN}/6a5a3df17a2057fcb75f47d1/branding/logo/logo-1784298994710.jpg`,
    banner: `${CDN}/6a5a3df17a2057fcb75f47d1/branding/banner/banner-1784549237351.webp`,
    topRated: true,
    available: true,
    startingPrice: 2500,
  },
  {
    id: 'pleaznscents',
    name: 'Pleazn Scents',
    initials: 'PS',
    category: 'Beauty & Personal Care',
    tagline: 'Arabian, niche and designer-inspired fragrances in oil form',
    about:
      'A flexible shopping where you get Arabian, niche, and designer-inspired fragrances in oil form ( Perfume oils).',
    location: '5 Oyovota St',
    address: '5 Oyovota St, Ojo, Lagos 102111, Lagos, Nigeria',
    logoGradient: 'from-amber-500 to-orange-500',
    logo: `${CDN}/6a51f6427a2057fcb75eac46/branding/logo/logo-1783806922717.webp`,
    banner: `${CDN}/6a51f6427a2057fcb75eac46/branding/banner/banner-1783806925445.webp`,
    topRated: true,
    available: true,
    startingPrice: 1000,
  },
  {
    id: 'zerostore',
    name: 'Zero Gadgets Stores',
    initials: 'ZG',
    category: 'Electronics & Gadgets',
    tagline: 'Business-class laptops, tested before they ship',
    location: 'University of Lagos',
    logoGradient: 'from-slate-600 to-gray-700',
    logo: `${CDN}/6a1aac609eaa35e375ac59e6/branding/logo/logo-1780134054859.jpg`,
    banner: `${CDN}/6a1aac609eaa35e375ac59e6/branding/banner/banner-1780134067824.jpg`,
    topRated: true,
    available: true,
    startingPrice: 850000,
  },
  {
    id: 'tsatechconnect',
    name: 'TSA TECH CONNECT📱⚡️🤝',
    initials: 'TT',
    category: 'Electronics & Gadgets',
    tagline: 'Phones, gadgets and the connect to match',
    location: 'Kudirat Abiola Way',
    logoGradient: 'from-cyan-500 to-blue-600',
    logo: `${CDN}/6a163d528d5a8e65e09b27c7/branding/logo/logo-1779843887095.gif`,
    banner: `${CDN}/6a163d528d5a8e65e09b27c7/branding/banner/banner-1779843888912.gif`,
    topRated: true,
    available: true,
    startingPrice: 85000,
  },
  {
    id: 'noors',
    name: "NOOR'S",
    initials: 'NO',
    category: 'Fashion & Apparel',
    tagline: 'Love and Light',
    location: 'Lagos',
    logoGradient: 'from-violet-500 to-indigo-500',
    logo: `${CLOUD}/v1777070359/vendors/69ebeb97932df72803a43cfe/branding/logo/logo-1777070355947.png`,
    banner: `${CLOUD}/v1777070360/vendors/69ebeb97932df72803a43cfe/branding/banner/banner-1777070358603.png`,
    topRated: true,
    available: true,
  },
  {
    id: 'hannypastries',
    name: 'Hanny Pastries',
    initials: 'HP',
    category: 'Food & Beverages',
    tagline: 'A regular snack that hits different',
    location: 'Lagos',
    logoGradient: 'from-orange-500 to-red-500',
    logo: `${CDN}/69ebe708932df72803a43c73/branding/logo/logo-1779553212879.jpg`,
    banner: `${CDN}/69ebe708932df72803a43c73/branding/banner/banner-1779553215041.jpg`,
    topRated: true,
    available: true,
  },
  {
    id: 'piousfragranceluxe',
    name: 'Pious Fragrance Luxe',
    initials: 'PF',
    category: 'Beauty & Personal Care',
    tagline: 'Bold, long-lasting sprays for him and her',
    location: 'Univ of Lagos',
    logoGradient: 'from-emerald-500 to-teal-500',
    logo: `${CLOUD}/v1776954335/vendors/69e76721c02b273580a355a4/branding/logo/logo-1776954333233.jpg`,
    banner: `${CLOUD}/v1776954337/vendors/69e76721c02b273580a355a4/branding/banner/banner-1776954335474.jpg`,
    topRated: true,
    available: true,
    startingPrice: 2700,
  },
  {
    id: 'amoreaselfcare',
    name: 'Amorea Self Care',
    initials: 'AM',
    category: 'Beauty & Personal Care',
    tagline: 'Self care that students can actually afford',
    location: 'Univ of Ilorin',
    logoGradient: 'from-pink-500 to-rose-400',
    logo: `${CLOUD}/v1777380168/vendors/69e63d0b1bce2e105a78da6b/branding/logo/logo-1777380166820.jpg`,
    banner: `${CLOUD}/v1777380281/vendors/69e63d0b1bce2e105a78da6b/branding/banner/banner-1777380280816.jpg`,
    topRated: true,
    available: true,
    startingPrice: 350,
  },
  {
    id: 'treasuredbabiesworld',
    name: 'Treasured Babies World',
    initials: 'TB',
    category: 'Baby & Kids',
    tagline: 'Everything for the little ones',
    location: 'Lagos',
    logoGradient: 'from-sky-400 to-blue-500',
    logo: `${CLOUD}/v1776678380/vendors/69e5f233573a75449d73635e/branding/logo/logo-1776678375522.jpg`,
    available: true,
  },
  {
    id: 'assaburselects',
    name: 'As Sabur Selects',
    initials: 'AS',
    category: 'Home & Living',
    tagline: 'A little of everything, picked properly',
    location: 'Lagos',
    logoGradient: 'from-teal-500 to-emerald-600',
    available: true,
    startingPrice: 500,
  },
  {
    id: 'soyescollections',
    name: "Soye's Collections",
    initials: 'SC',
    category: 'Fashion & Apparel',
    tagline: 'Wristwatches and perfume oils',
    location: 'Lagos',
    logoGradient: 'from-amber-600 to-yellow-500',
    available: true,
    startingPrice: 2500,
  },
  {
    id: 'kemshaven',
    name: "Kem's Haven",
    initials: 'KH',
    category: 'Home & Living',
    tagline: 'Kitchen and home essentials',
    location: 'Lagos',
    logoGradient: 'from-lime-600 to-green-600',
    available: true,
    startingPrice: 3900,
  },
  {
    id: 'fojabaccessories',
    name: 'Fojab accessories',
    initials: 'FA',
    category: 'Electronics & Gadgets',
    tagline: 'Oraimo audio and phone accessories',
    location: 'Lagos',
    logoGradient: 'from-blue-600 to-indigo-600',
    available: true,
    startingPrice: 22600,
  },
  {
    id: 'growwithglow',
    name: 'Grow with glow',
    initials: 'GG',
    category: 'Beauty & Personal Care',
    tagline: 'Ayurvedic hair growth oils',
    location: 'Lagos',
    logoGradient: 'from-green-500 to-emerald-600',
    available: true,
    startingPrice: 4900,
  },
  {
    id: 'aaessignature',
    name: "AAE's Signature.",
    initials: 'AA',
    category: 'Arts, Crafts & Gifts',
    tagline: 'Custom-made leather goods and journals',
    location: 'Lagos',
    logoGradient: 'from-stone-600 to-amber-800',
    available: true,
    startingPrice: 8000,
  },
  {
    id: 'gordonglasses',
    name: 'Gordon Glasses',
    initials: 'GD',
    category: 'Fashion & Apparel',
    tagline: 'Photochromic and blue-light eyewear',
    location: 'Lagos',
    logoGradient: 'from-zinc-600 to-slate-700',
    available: true,
    startingPrice: 12000,
  },
  {
    id: 'wardahsbloombeauty',
    name: "Wardah's Bloom Beauty",
    initials: 'WB',
    category: 'Beauty & Personal Care',
    tagline: 'Bracelet sets and everyday adornment',
    location: 'Lagos',
    logoGradient: 'from-rose-400 to-fuchsia-500',
    available: true,
    startingPrice: 4300,
  },
  {
    id: 'hmoscreamycaramelcandy',
    name: "HMO's CREAMY CARAMEL CANDY",
    initials: 'HC',
    category: 'Food & Beverages',
    tagline: 'Creamy caramel, made in small batches',
    location: 'Lagos',
    logoGradient: 'from-amber-500 to-orange-600',
    available: true,
    startingPrice: 1500,
  },
  {
    id: 'khalalkravings',
    name: 'K.halal_kravings',
    initials: 'KK',
    category: 'Food & Beverages',
    tagline: 'Parfaits and halal treats',
    location: 'Lagos',
    logoGradient: 'from-red-400 to-rose-500',
    available: true,
    startingPrice: 3500,
  },
  {
    id: 'blingsbybeebah',
    name: 'Blings by Beebah',
    initials: 'BB',
    category: 'Fashion & Apparel',
    tagline: 'Non-tarnishing stainless steel jewellery',
    location: 'Lagos',
    logoGradient: 'from-yellow-500 to-amber-600',
    available: true,
    startingPrice: 2500,
  },
  {
    id: 'sweetciousluxeandaesthetics',
    name: 'Sweet Cious Luxe and aesthetics',
    initials: 'SL',
    category: 'Fashion & Apparel',
    tagline: 'Top notch jewelries',
    location: 'Lagos',
    logoGradient: 'from-purple-500 to-pink-500',
    available: true,
    startingPrice: 1500,
  },
  {
    id: 'bqees-wears',
    name: 'BQEES WEARS',
    initials: 'BQ',
    category: 'Fashion & Apparel',
    tagline: 'Hijab pins and modest essentials',
    location: 'Lagos',
    logoGradient: 'from-indigo-500 to-violet-600',
    available: true,
    startingPrice: 500,
  },
];

/* ── Products ─────────────────────────────────────────────────────── */

export const PRODUCTS: Product[] = [
  /* His Mercy Croché */
  {
    id: '6a5c96a3df9cda9caa5b7a34',
    storeId: 'hismercycroch',
    name: '46pcs 8/9/10mm Pack Crochet Hooks Set Big Size Soft Handle Crochet Needles Yarn Weave Knitting Needles Set With Bag',
    price: 12000,
    category: 'Crochet Supplies',
    image: `${CDN}/6a5a6b7b7a2057fcb75f4de7/products/6a5c96a3df9cda9caa5b7a34/7732caed-3f61-475e-a478-30aea2905cd2.webp`,
    isNew: true,
  },

  /* Fee's Crochet */
  {
    id: '6a5b6adcdf9cda9caa5b4e7a',
    storeId: 'feescrochet',
    name: 'Crochet Hair clip',
    price: 4500,
    category: 'Hair Accessories',
    image: `${CDN}/6a5a3df17a2057fcb75f47d1/products/6a5b6adcdf9cda9caa5b4e7a/da019265-af0d-48c7-8c81-487a195af753.webp`,
    isNew: true,
  },
  {
    id: '6a5aacba7a2057fcb75f622b',
    storeId: 'feescrochet',
    name: 'Crochet star bag',
    price: 25000,
    category: 'Bags',
    image: `${CDN}/6a5a3df17a2057fcb75f47d1/products/6a5aacba7a2057fcb75f622b/3724caf4-d710-4164-957b-b0fa19627512.webp`,
  },
  {
    id: '6a5b6993df9cda9caa5b4e0d',
    storeId: 'feescrochet',
    name: 'Crochet book mark',
    price: 2500,
    category: 'Stationery',
    image: `${CDN}/6a5a3df17a2057fcb75f47d1/products/6a5b6993df9cda9caa5b4e0d/b70f42ec-5ae4-4ffb-936c-1e1706bb9b91.webp`,
  },

  /* Pleazn Scents */
  {
    id: '6a52b8de7a2057fcb75ec564',
    storeId: 'pleaznscents',
    name: 'Oud Satin Mood Perfume oil',
    price: 1100,
    category: 'Arabian Collection',
    image: `${CDN}/6a51f6427a2057fcb75eac46/products/6a52b8de7a2057fcb75ec564/225167f2-ed3f-40a4-804a-4a3b874b3bea.webp`,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '6a52b5677a2057fcb75ec38b',
    storeId: 'pleaznscents',
    name: 'Si by Giorgio Armani Perfume oil',
    price: 1100,
    category: 'Designer-inspired Fragrances',
    image: `${CDN}/6a51f6427a2057fcb75eac46/products/6a52b5677a2057fcb75ec38b/0c56ebfc-3fd0-4615-bd65-10ab3476fb00.webp`,
    isBestSeller: true,
  },
  {
    id: '6a52b3977a2057fcb75ec2ee',
    storeId: 'pleaznscents',
    name: 'Aventus by Creed Perfume oil',
    price: 1500,
    category: 'Designer-inspired Fragrances',
    image: `${CDN}/6a51f6427a2057fcb75eac46/products/6a52b3977a2057fcb75ec2ee/4aa2dc43-63a2-46b1-b7f2-49d625405b52.webp`,
    isBestSeller: true,
  },

  /* Zero Gadgets Stores */
  {
    id: '6a3a1d86455f030c04e0c12c',
    storeId: 'zerostore',
    name: 'HP Spectre x360 15 2020',
    price: 1150000,
    category: 'Laptops',
    image: `${CDN}/6a1aac609eaa35e375ac59e6/products/6a3a1d86455f030c04e0c12c/53b26689-5669-40b6-b76e-4fac55541e09.webp`,
  },
  {
    id: '6a1aaf3a9eaa35e375ac5a74',
    storeId: 'zerostore',
    name: 'HP EliteBook 1040 G10',
    price: 850000,
    category: 'Laptops',
    image: `${CDN}/6a1aac609eaa35e375ac59e6/products/6a1aaf3a9eaa35e375ac5a74/eb51bb34-04b1-471e-ae79-89eb116e56d0.webp`,
  },

  /* Pious Fragrance Luxe — vendor has no product photography on file yet */
  {
    id: '6a2329e3b28b0c5a91e3b502',
    storeId: 'piousfragranceluxe',
    name: 'Mousuf Spray Perfume – Sweet & Long Lasting',
    price: 5000,
    category: 'Sprays',
    image: `${CLOUD}/v1776954335/vendors/69e76721c02b273580a355a4/branding/logo/logo-1776954333233.jpg`,
  },
  {
    id: '6a232e6cb28b0c5a91e3b5cd',
    storeId: 'piousfragranceluxe',
    name: 'GK Men Perfume – Bold & Long Lasting Fragrance',
    price: 4000,
    category: 'Sprays',
    image: `${CLOUD}/v1776954335/vendors/69e76721c02b273580a355a4/branding/logo/logo-1776954333233.jpg`,
  },

  /* As Sabur Selects */
  {
    id: '6a31876cd857e69862bc136f',
    storeId: 'assaburselects',
    name: 'Glass Cup Coffee Tumbler with straw',
    price: 2500,
    category: 'Drinkware',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a31876cd857e69862bc136f/609530da-acb2-4df1-a8dc-8ab48d31b16a.webp`,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '6a422eaf5fb53865da4ad194',
    storeId: 'assaburselects',
    name: 'Hand held mini fan',
    price: 3000,
    category: 'Gadgets',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a422eaf5fb53865da4ad194/51b71cc8-b54e-46d8-95c6-b87326b9a98f.webp`,
    isBestSeller: true,
  },
  {
    id: '6a52194f7a2057fcb75eb273',
    storeId: 'assaburselects',
    name: 'Plastic Cups with lid',
    price: 700,
    category: 'Drinkware',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a52194f7a2057fcb75eb273/eba7a0ec-14c8-4a48-b6e8-7c63df2e5c7c.webp`,
    isBestSeller: true,
  },
  {
    id: '6a5200897a2057fcb75ead4d',
    storeId: 'assaburselects',
    name: 'Mini Hair Straightener',
    price: 2800,
    category: 'Beauty Tools',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a5200897a2057fcb75ead4d/a349cd26-a99c-4cae-9c15-20efb28d0c8d.webp`,
  },
  {
    id: '6a520aab7a2057fcb75eb059',
    storeId: 'assaburselects',
    name: 'Mini Jewelry box',
    price: 4000,
    category: 'Jewellery Storage',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a520aab7a2057fcb75eb059/e7dd24e1-0edc-4490-acc5-ec21cf8ca243.webp`,
  },
  {
    id: '6a520b0c7a2057fcb75eb07d',
    storeId: 'assaburselects',
    name: 'Medium sized Jewelry box',
    price: 7000,
    category: 'Jewellery Storage',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a520b0c7a2057fcb75eb07d/2fc0471c-fd1e-49cb-930d-ab3fedb95b90.webp`,
  },
  {
    id: '6a55f6317a2057fcb75efd1c',
    storeId: 'assaburselects',
    name: 'Big and Classy Hijab and scarf Pins(12 pcs)',
    price: 10000,
    category: 'Hijab Pins',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a55f6317a2057fcb75efd1c/094133b0-25ec-4006-ac4b-ed49c47ea0de.webp`,
  },
  {
    id: '6a51237e7a2057fcb75ea31e',
    storeId: 'assaburselects',
    name: 'Adjustable Phone Stands',
    price: 2000,
    category: 'Phone Accessories',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a51237e7a2057fcb75ea31e/b1eb0eed-283a-4988-ab3e-82f0650c37a4.webp`,
  },
  {
    id: '6a51233e7a2057fcb75ea2fc',
    storeId: 'assaburselects',
    name: 'Phone Stands',
    price: 1700,
    category: 'Phone Accessories',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a51233e7a2057fcb75ea2fc/263678e1-93b4-4658-8d4c-7072f8fb78e4.webp`,
  },
  {
    id: '6a42237e5fb53865da4acd88',
    storeId: 'assaburselects',
    name: 'Phone Suction holder',
    price: 500,
    category: 'Phone Accessories',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a42237e5fb53865da4acd88/db0e6efd-73ed-46f4-b159-4886918e8864.webp`,
  },
  {
    id: '6a520e017a2057fcb75eb131',
    storeId: 'assaburselects',
    name: 'Original Insulated prints Stanley Cup',
    price: 16500,
    category: 'Drinkware',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a520e017a2057fcb75eb131/48f7f375-20bc-425f-bb25-74a5a337feeb.webp`,
  },
  {
    id: '6a31cccc1e5402c81a5b62b0',
    storeId: 'assaburselects',
    name: '2-in-1 home textiles towel Set.',
    price: 5000,
    category: 'Home Textiles',
    image: `${CDN}/6a27c971b5b47ca7539f750e/products/6a31cccc1e5402c81a5b62b0/77beae0f-487e-4edd-8df0-8ea3794d47fd.webp`,
  },

  /* Soye's Collections */
  {
    id: '6a738f2c06f719678ebf12dc',
    storeId: 'soyescollections',
    name: 'CK rubber strap wristwatch',
    price: 4000,
    category: 'Watches',
    image: `${CDN}/695928462c20bd5d93e308de/products/6a738f2c06f719678ebf12dc/69c2f58b-a6fe-40f4-813a-64eefc4b9834.webp`,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '6a738dda06f719678ebf1213',
    storeId: 'soyescollections',
    name: 'Premium Unisex wristwatch',
    price: 8000,
    category: 'Watches',
    image: `${CDN}/695928462c20bd5d93e308de/products/6a738dda06f719678ebf1213/f2116315-ab5d-496a-9e91-d707f443e748.webp`,
    isBestSeller: true,
  },
  {
    id: '6a739ca506f719678ebf16b7',
    storeId: 'soyescollections',
    name: '6ml Oil perfume by Naseem',
    price: 2500,
    category: 'Fragrance',
    image: `${CDN}/695928462c20bd5d93e308de/products/6a739ca506f719678ebf16b7/ae24f25f-bd8a-42b8-855b-6b1e9335bbd1.webp`,
  },

  /* Kem's Haven */
  {
    id: '6a2a7710fe222397756655b6',
    storeId: 'kemshaven',
    name: 'Laptop table',
    price: 8900,
    category: 'Furniture',
    image: `${CDN}/69e36f7f647cafae0e70a2e1/products/6a2a7710fe222397756655b6/f96ad4b5-9e1a-4c1f-a439-ad12f7ffc4ae.webp`,
  },
  {
    id: '6a2a7573fe22239775665532',
    storeId: 'kemshaven',
    name: '8 pcs knife set',
    price: 5800,
    category: 'Kitchen',
    image: `${CDN}/69e36f7f647cafae0e70a2e1/products/6a2a7573fe22239775665532/26b7a7c4-828e-4612-8d23-7edd8a5163bb.webp`,
  },
  {
    id: '6a2a7477fe222397756654fa',
    storeId: 'kemshaven',
    name: '4pcs knife set',
    price: 3900,
    category: 'Kitchen',
    image: `${CDN}/69e36f7f647cafae0e70a2e1/products/6a2a7477fe222397756654fa/230cfdcd-5963-4dee-b29d-824ee5703906.webp`,
  },
  {
    id: '6a2a7617fe2223977566555a',
    storeId: 'kemshaven',
    name: '7-piece knife set with chopping board',
    price: 5600,
    category: 'Kitchen',
    image: `${CDN}/69e36f7f647cafae0e70a2e1/products/6a2a7617fe2223977566555a/044ac1fc-c6ce-4cf5-b1ec-66763ceaa1b1.webp`,
  },
  {
    id: '6a2a77ddfe222397756655f5',
    storeId: 'kemshaven',
    name: 'Rechargeable led display hand fan',
    price: 4600,
    category: 'Appliances',
    image: `${CDN}/69e36f7f647cafae0e70a2e1/products/6a2a77ddfe222397756655f5/d0e92250-bd25-49fc-8c67-3ab29b3a637b.webp`,
  },

  /* Fojab accessories */
  {
    id: '6a0b0b4c3e30c9cfe6e6122e',
    storeId: 'fojabaccessories',
    name: 'Oraimo space buds neo+ ANC',
    price: 22600,
    category: 'Audio',
    image: `${CDN}/69ff4089e6619680859439b2/products/6a0b0b4c3e30c9cfe6e6122e/3647f0ea-5402-4864-9ab8-9846198a131c.webp`,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '6a11607e81a5f92b89b088ad',
    storeId: 'fojabaccessories',
    name: 'Oraimo Boompop lite ENC Wireless Headphones',
    price: 33000,
    category: 'Audio',
    image: `${CDN}/69ff4089e6619680859439b2/products/6a11607e81a5f92b89b088ad/86f21cbd-9334-4830-a909-945fa418ddd8.webp`,
  },
  {
    id: '6a115edf81a5f92b89b0883d',
    storeId: 'fojabaccessories',
    name: 'Oraimo Speaker',
    price: 30900,
    category: 'Audio',
    image: `${CDN}/69ff4089e6619680859439b2/products/6a115edf81a5f92b89b0883d/3647f0ea-5402-4864-9ab8-9846198a131c.webp`,
  },

  /* Grow with glow */
  {
    id: '6a5dfb48df9cda9caa5be76a',
    storeId: 'growwithglow',
    name: '100ml of our ayurvedic product',
    price: 8500,
    category: 'Hair Care',
    image: `${CDN}/6a5df6dadf9cda9caa5be582/products/6a5dfb48df9cda9caa5be76a/f95e418e-0b89-4fc9-83ff-2ec5ad121cc2.webp`,
    isNew: true,
  },
  {
    id: '6a5df910df9cda9caa5be5e6',
    storeId: 'growwithglow',
    name: '50ml of gwg hair growth oil',
    price: 4900,
    category: 'Hair Care',
    image: `${CDN}/6a5df6dadf9cda9caa5be582/products/6a5df910df9cda9caa5be5e6/9c618b86-7c84-49e7-9966-bc220917f195.webp`,
  },

  /* AAE's Signature. */
  {
    id: '6a5bebbcdf9cda9caa5b6ad9',
    storeId: 'aaessignature',
    name: "AAE's Custom-Made Leather Purse. 🤎✨️",
    price: 8000,
    category: 'Leather Goods',
    image: `${CDN}/6a5bdf2bdf9cda9caa5b634b/products/6a5bebbcdf9cda9caa5b6ad9/9543fbd0-8a7b-436f-8c90-bb9beb55dfbf.webp`,
    isNew: true,
  },
  {
    id: '6a5be7f3df9cda9caa5b67d2',
    storeId: 'aaessignature',
    name: "AAE's Artsy Custom-Made Journal[Text-On/UV Printing].💚✨️",
    price: 12000,
    category: 'Stationery',
    image: `${CDN}/6a5bdf2bdf9cda9caa5b634b/products/6a5bebbcdf9cda9caa5b6ad9/9543fbd0-8a7b-436f-8c90-bb9beb55dfbf.webp`,
  },

  /* Gordon Glasses */
  {
    id: '6a4a19b9a571fc7490adafc3',
    storeId: 'gordonglasses',
    name: 'GROK PHOTOCHROMIC GLASSES, BLUE LIGHT FILTER 2in1',
    price: 12000,
    category: 'Eyewear',
    image: `${CDN}/6a3badab8a99f346a65f6062/products/6a4a19b9a571fc7490adafc3/4cf4c1eb-f4da-42d6-8a8b-9323a6ee11f2.webp`,
    isNew: true,
    isBestSeller: true,
  },

  /* Wardah's Bloom Beauty */
  {
    id: '6a6b550e06f719678ebe7f2f',
    storeId: 'wardahsbloombeauty',
    name: 'MInt Kiss Bracelet Set',
    price: 4300,
    category: 'Jewellery',
    image: `${CDN}/6a6b536706f719678ebe7efc/products/6a6b550e06f719678ebe7f2f/5e15e4cf-3f06-4307-86da-3482c04ce066.webp`,
    isNew: true,
    isBestSeller: true,
  },

  /* HMO's CREAMY CARAMEL CANDY */
  {
    id: '6a633409df9cda9caa5c373c',
    storeId: 'hmoscreamycaramelcandy',
    name: '1.5k worth Candy',
    price: 1500,
    category: 'Confectionery',
    image: `${CDN}/6a632c86df9cda9caa5c3574/products/6a633409df9cda9caa5c373c/c6c8d441-32be-41f7-a7d2-6b1450aed9b0.webp`,
    isNew: true,
    isBestSeller: true,
  },

  /* K.halal_kravings */
  {
    id: '6a7aad6406f719678ebf7d32',
    storeId: 'khalalkravings',
    name: 'Premium fruit parfait',
    price: 3500,
    category: 'Desserts',
    image: `${CDN}/6a7a75c406f719678ebf7c06/products/6a7aad6406f719678ebf7d32/d2bfaa80-46d1-483d-8c9d-f9c9e3dd9622.webp`,
    isNew: true,
  },

  /* Blings by Beebah */
  {
    id: '6a2885d57ffac8a46a3a0f58',
    storeId: 'blingsbybeebah',
    name: 'Non tarnishing stainless steel jewelry',
    price: 2500,
    category: 'Jewellery',
    image: `${CDN}/6a287be27ffac8a46a3a0aa5/products/6a2885d57ffac8a46a3a0f58/bc3fa01c-fafa-47ff-9f0b-c0ef2a5b4f43.webp`,
  },

  /* Sweet Cious Luxe and aesthetics */
  {
    id: '6a4a2d68a571fc7490adb724',
    storeId: 'sweetciousluxeandaesthetics',
    name: 'Top Notch jewelries',
    price: 1500,
    category: 'Jewellery',
    image: `${CDN}/6a4a2ad4a571fc7490adb687/products/6a4a2d68a571fc7490adb724/41ba6b3f-57eb-4ec6-a7e9-15eeebaa63a6.webp`,
  },

  /* BQEES WEARS */
  {
    id: '6a10dd4181a5f92b89b08178',
    storeId: 'bqees-wears',
    name: 'Hijab Pins',
    price: 500,
    category: 'Hijab Pins',
    image: `${CDN}/692f3255db18db8c5515eccd/products/6a10dd4181a5f92b89b08178/4110598c-0d9b-457d-8f79-2e022c48839d.webp`,
  },
];

/* ── Services ─────────────────────────────────────────────────────── */

export const SERVICES: Service[] = [
  {
    id: 'cutcanvasmedia',
    provider: 'Cutcanvas Media',
    category: 'Event Services',
    tagline: 'Creating Impact, Capturing Excellence.',
    location: '18 Kasumu Aleshinloye St',
    logo: `${CLOUD}/v1777758974/vendors/69f59e59b1d56a42935658f3/branding/logo/logo-1777758967832.jpg`,
    topRated: true,
    available: true,
  },
  {
    id: 'hannysedits',
    provider: "Hanny's Edits",
    category: 'Creative & Media Services',
    tagline: '......From Raw to Reel',
    location: 'Lagos',
    logo: `${CDN}/69ebdf30932df72803a43bd2/branding/logo/logo-1779530082934.webp`,
    topRated: true,
    available: true,
  },
  {
    id: 'bellebox',
    provider: 'BelleBox',
    category: 'Delivery & Logistics',
    tagline: 'Affordable, fast, importation',
    location: 'Ikorodu',
    logo: `${CLOUD}/v1776529529/vendors/69e39bc969336d7c54c6fa83/branding/logo/logo-1776529517485.png`,
    topRated: true,
    available: true,
  },
];

/* ── Sponsored placements ─────────────────────────────────────────── */

export const SPONSORS: Sponsor[] = [
  {
    id: 'sp-1',
    storeId: 'pleaznscents',
    tier: 'headline',
    blurb: 'Arabian, niche and designer-inspired oils from ₦1,000',
    featuredProductId: '6a52b8de7a2057fcb75ec564',
  },
  { id: 'sp-2', storeId: 'zerostore', tier: 'partner', blurb: 'Business-class laptops, tested on camera' },
  { id: 'sp-3', storeId: 'feescrochet', tier: 'partner', blurb: 'Handmade crochet, made to order' },
  { id: 'sp-4', storeId: 'fojabaccessories', tier: 'partner', blurb: 'Oraimo audio, genuine stock' },
  { id: 'sp-5', storeId: 'hannypastries', tier: 'partner', blurb: 'A regular snack that hits different' },
  { id: 'sp-6', storeId: 'aaessignature', tier: 'partner', blurb: 'Custom leather, made for you' },
];

/* ── Lookups ──────────────────────────────────────────────────────── */

export const getStore = (storeId: string): Store | undefined =>
  STORES.find(store => store.id === storeId);

export const getProduct = (productId: string): Product | undefined =>
  PRODUCTS.find(product => product.id === productId);

export const getStoreProducts = (storeId: string): Product[] =>
  PRODUCTS.filter(product => product.storeId === storeId);

/** Aisles within a store, for the store page filter chips. */
export const getStoreCategories = (storeId: string): string[] => [
  'All Products',
  ...Array.from(new Set(getStoreProducts(storeId).map(product => product.category))),
];

/** Vendors that actually have stock to show. */
export const getStocked = (): Store[] =>
  STORES.filter(store => getStoreProducts(store.id).length > 0);

/** A store's banner, falling back to its logo, then to its first product. */
export const getStoreBanner = (store: Store): string =>
  store.banner ?? store.logo ?? getStoreProducts(store.id)[0]?.image ?? '';

export const getStoreAvatar = (store: Store): string | undefined =>
  store.logo ?? getStoreProducts(store.id)[0]?.image;

export const getStorePreview = (storeId: string, count = 3): string[] =>
  getStoreProducts(storeId)
    .slice(0, count)
    .map(product => product.image);

export const getStoreProductCount = (storeId: string): number =>
  getStoreProducts(storeId).length;

export const getNewArrivals = (limit = 8): Product[] =>
  PRODUCTS.filter(product => product.isNew).slice(0, limit);

/**
 * Best sellers, spread across vendors — one per store before any store gets a
 * second slot, so the rail shows the marketplace rather than three shops.
 */
export const getBestSellers = (limit = 8): Product[] => {
  const byStore = new Map<string, Product[]>();
  for (const product of PRODUCTS.filter(item => item.isBestSeller)) {
    byStore.set(product.storeId, [...(byStore.get(product.storeId) ?? []), product]);
  }

  const ranked: Product[] = [];
  for (let round = 0; ranked.length < limit; round += 1) {
    const picks = [...byStore.values()].map(items => items[round]).filter(Boolean) as Product[];
    if (picks.length === 0) break;
    ranked.push(...picks);
  }
  return ranked.slice(0, limit);
};

/** Products grouped under a marketplace-level category, via their vendor. */
export const getProductsInCategory = (category: string, limit = 8): Product[] => {
  const storeIds = STORES.filter(store => store.category === category).map(store => store.id);
  return PRODUCTS.filter(product => storeIds.includes(product.storeId)).slice(0, limit);
};

export const getCategoryProductCount = (category: string): number => {
  const storeIds = STORES.filter(store => store.category === category).map(store => store.id);
  return PRODUCTS.filter(product => storeIds.includes(product.storeId)).length;
};

export const getTopStoreInCategory = (category: string): Store | undefined =>
  STORES.filter(store => store.category === category && getStoreProducts(store.id).length > 0)[0] ??
  STORES.find(store => store.category === category);

/** The marketplace's own category taxonomy, in the order the live site lists it. */
export const CATEGORIES = [
  'Food & Beverages',
  'Fashion & Apparel',
  'Beauty & Personal Care',
  'Electronics & Gadgets',
  'Home & Living',
  'Arts, Crafts & Gifts',
  'Baby & Kids',
];
