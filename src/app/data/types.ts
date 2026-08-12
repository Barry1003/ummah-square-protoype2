export interface Product {
  id: string;
  /** Slug of the vendor that sells this product. */
  storeId: string;
  name: string;
  description?: string;
  /** Price in Naira. */
  price: number;
  /** Was-price, when the vendor is running a discount. */
  originalPrice?: number;
  /** Aisle inside the store, used by the store page filter chips. */
  category: string;
  image: string;
  gallery?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  /** Bullet points shown under the description. */
  highlights?: string[];
  /** Key/value spec table. */
  specifications?: Record<string, string>;
  /** Units the vendor has on hand — drives the low-stock hint. */
  stock?: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  initials: string;
  /** 1–5. Product ratings are averaged from these, never stored separately. */
  rating: number;
  date: string;
  title?: string;
  body: string;
  /** Bought through Ummah Square rather than an unverified reviewer. */
  verifiedPurchase?: boolean;
  helpful?: number;
}

export interface Store {
  /** Slug — the URL segment locally (/store/:id) and the live subdomain. */
  id: string;
  name: string;
  /** Two-letter monogram, used when a vendor has no logo on file. */
  initials: string;
  tagline?: string;
  about?: string;
  category: string;
  /** Gradient fallback for the avatar when there's no logo image. */
  logoGradient: string;
  logo?: string;
  banner?: string;
  location: string;
  /** Full address where the vendor publishes one. */
  address?: string;
  /** Badges the live marketplace actually shows. */
  topRated?: boolean;
  available?: boolean;
  /** Lowest price in the vendor's catalogue, shown as "STARTING AT". */
  startingPrice?: number;
}

export interface Service {
  id: string;
  provider: string;
  category: string;
  tagline: string;
  location: string;
  logo: string;
  banner?: string;
  topRated?: boolean;
  available?: boolean;
}

/**
 * A paid placement. `storeId` points at a real vendor being promoted —
 * sponsorship on this marketplace is a vendor buying visibility, not a
 * third-party brand endorsement.
 */
export interface Sponsor {
  id: string;
  storeId: string;
  tier: 'headline' | 'partner';
  /** The promoted line shown on the placement. */
  blurb: string;
  /** Optional product to feature inside the slot. */
  featuredProductId?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
