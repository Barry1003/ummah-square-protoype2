import type { Review } from './types';

/**
 * ⚠️ PLACEHOLDER CONTENT — NOT REAL CUSTOMER FEEDBACK.
 *
 * These reviews exist so the product page can be designed and demoed with a
 * populated review section. They are attached to real, trading vendors, so
 * they must be replaced by the live reviews API before this goes to
 * production — delete this file and point `getProductReviews` at the endpoint.
 *
 * Only some products carry reviews on purpose: a young marketplace has plenty
 * of unreviewed listings, and the empty state needs to be designed too.
 */
export const DEMO_REVIEWS: Review[] = [
  /* Fee's Crochet — Crochet Hair clip */
  {
    id: 'dr-1',
    productId: '6a5b6adcdf9cda9caa5b4e7a',
    author: 'Zainab Adeyemi',
    initials: 'ZA',
    rating: 5,
    date: '4 days ago',
    title: 'Even better in person',
    body: 'The stitching is really neat and the colours are exactly like the photos. My daughter wears the pink one every day and it has not come apart.',
    verifiedPurchase: true,
    helpful: 12,
  },
  {
    id: 'dr-2',
    productId: '6a5b6adcdf9cda9caa5b4e7a',
    author: 'Halima Bello',
    initials: 'HB',
    rating: 4,
    date: '2 weeks ago',
    body: 'Lovely clips and they arrived quickly. The clasp on one was a little stiff at first but it loosened up.',
    verifiedPurchase: true,
    helpful: 3,
  },
  {
    id: 'dr-3',
    productId: '6a5b6adcdf9cda9caa5b4e7a',
    author: 'Fatima Yusuf',
    initials: 'FY',
    rating: 5,
    date: '3 weeks ago',
    body: 'Ordered two sets as gifts. Both were wrapped nicely and the vendor sent a photo before shipping.',
    verifiedPurchase: true,
    helpful: 7,
  },

  /* Fee's Crochet — Crochet star bag */
  {
    id: 'dr-4',
    productId: '6a5aacba7a2057fcb75f622b',
    author: 'Aminat Lawal',
    initials: 'AL',
    rating: 5,
    date: '1 week ago',
    title: 'Worth the wait',
    body: 'Made to order so it took about ten days, but the finish is beautiful and it holds far more than it looks like it should.',
    verifiedPurchase: true,
    helpful: 18,
  },
  {
    id: 'dr-5',
    productId: '6a5aacba7a2057fcb75f622b',
    author: 'Khadija Musa',
    initials: 'KM',
    rating: 4,
    date: '1 month ago',
    body: 'Gorgeous bag. I would have liked a lining inside but for the price I am still very happy.',
    verifiedPurchase: true,
    helpful: 5,
  },

  /* Pleazn Scents — Oud Satin Mood */
  {
    id: 'dr-6',
    productId: '6a52b8de7a2057fcb75ec564',
    author: 'Ibrahim Sanni',
    initials: 'IS',
    rating: 5,
    date: '5 days ago',
    title: 'Lasts all day',
    body: 'Applied it in the morning and could still smell it after Maghrib. Very close to the original as far as I can tell.',
    verifiedPurchase: true,
    helpful: 24,
  },
  {
    id: 'dr-7',
    productId: '6a52b8de7a2057fcb75ec564',
    author: 'Sumayyah Kabir',
    initials: 'SK',
    rating: 5,
    date: '2 weeks ago',
    body: 'Alcohol free and the projection is strong for an oil. Already ordered a second one.',
    verifiedPurchase: true,
    helpful: 9,
  },
  {
    id: 'dr-8',
    productId: '6a52b8de7a2057fcb75ec564',
    author: 'Abdul Rahman',
    initials: 'AR',
    rating: 4,
    date: '3 weeks ago',
    body: 'Good scent and fair price. The roller bottle is small so bear that in mind.',
    verifiedPurchase: true,
    helpful: 4,
  },
  {
    id: 'dr-9',
    productId: '6a52b8de7a2057fcb75ec564',
    author: 'Naimah Sule',
    initials: 'NS',
    rating: 5,
    date: '1 month ago',
    body: 'My husband asked what I was wearing. That never happens. Buying again.',
    verifiedPurchase: true,
    helpful: 31,
  },

  /* As Sabur Selects — Glass Cup Coffee Tumbler */
  {
    id: 'dr-10',
    productId: '6a31876cd857e69862bc136f',
    author: 'Tunde Adeleke',
    initials: 'TA',
    rating: 5,
    date: '6 days ago',
    body: 'Solid glass, the leather sleeve actually protects your hand, and it does not leak in my bag.',
    verifiedPurchase: true,
    helpful: 15,
  },
  {
    id: 'dr-11',
    productId: '6a31876cd857e69862bc136f',
    author: 'Bilkisu Sadiq',
    initials: 'BS',
    rating: 4,
    date: '2 weeks ago',
    body: 'Looks exactly like the picture. Wash the straw by hand, the brush it comes with is a bit flimsy.',
    verifiedPurchase: true,
    helpful: 6,
  },
  {
    id: 'dr-12',
    productId: '6a31876cd857e69862bc136f',
    author: 'Hauwa Idris',
    initials: 'HI',
    rating: 3,
    date: '1 month ago',
    body: 'Nice cup but mine arrived with a small scratch on the sleeve. Vendor offered a partial refund which was fair.',
    verifiedPurchase: true,
    helpful: 2,
  },

  /* Fojab accessories — Oraimo space buds neo+ */
  {
    id: 'dr-13',
    productId: '6a0b0b4c3e30c9cfe6e6122e',
    author: 'Chidi Okafor',
    initials: 'CO',
    rating: 5,
    date: '3 days ago',
    title: 'Genuine Oraimo',
    body: 'Serial checked out on the Oraimo site. ANC is decent for the price and the case charges fast.',
    verifiedPurchase: true,
    helpful: 21,
  },
  {
    id: 'dr-14',
    productId: '6a0b0b4c3e30c9cfe6e6122e',
    author: 'Sadiq Ahmed',
    initials: 'SA',
    rating: 4,
    date: '2 weeks ago',
    body: 'Sound is good and battery lasts me two days of calls. Touch controls take getting used to.',
    verifiedPurchase: true,
    helpful: 8,
  },

  /* Zero Gadgets Stores — HP EliteBook 1040 G10 */
  {
    id: 'dr-15',
    productId: '6a1aaf3a9eaa35e375ac5a74',
    author: 'Emeka Bello',
    initials: 'EB',
    rating: 5,
    date: '1 week ago',
    title: 'Tested before shipping',
    body: 'They sent a video of the machine booting and running the benchmark before I paid the balance. Arrived exactly as described.',
    verifiedPurchase: true,
    helpful: 27,
  },
  {
    id: 'dr-16',
    productId: '6a1aaf3a9eaa35e375ac5a74',
    author: 'Usman Garba',
    initials: 'UG',
    rating: 5,
    date: '3 weeks ago',
    body: 'Battery health was at 94% as promised. Escrow made me comfortable spending this much online.',
    verifiedPurchase: true,
    helpful: 14,
  },

  /* Kem's Haven — 8 pcs knife set */
  {
    id: 'dr-17',
    productId: '6a2a7573fe22239775665532',
    author: 'Maryam Okonkwo',
    initials: 'MO',
    rating: 4,
    date: '1 week ago',
    body: 'Sharp out of the box and the block looks smart on the counter. Handles are lighter than I expected.',
    verifiedPurchase: true,
    helpful: 5,
  },
  {
    id: 'dr-18',
    productId: '6a2a7573fe22239775665532',
    author: 'Yusuf Abubakar',
    initials: 'YA',
    rating: 5,
    date: '1 month ago',
    body: 'Been using them daily for a month, still no rust and they hold an edge well.',
    verifiedPurchase: true,
    helpful: 11,
  },

  /* HMO's — 1.5k worth Candy */
  {
    id: 'dr-19',
    productId: '6a633409df9cda9caa5c373c',
    author: 'Rukayat Adebayo',
    initials: 'RA',
    rating: 5,
    date: '2 days ago',
    body: 'Genuinely creamy, not the hard sugary kind. The pack finished the same day in my house.',
    verifiedPurchase: true,
    helpful: 9,
  },
  {
    id: 'dr-20',
    productId: '6a633409df9cda9caa5c373c',
    author: 'Amina Shehu',
    initials: 'AS',
    rating: 5,
    date: '2 weeks ago',
    body: 'Ordered for my shop and customers keep asking for more. Packaging was sealed properly.',
    verifiedPurchase: true,
    helpful: 6,
  },

  /* Wardah's Bloom Beauty — MInt Kiss Bracelet Set */
  {
    id: 'dr-21',
    productId: '6a6b550e06f719678ebe7f2f',
    author: 'Aisha Mohammed',
    initials: 'AM',
    rating: 4,
    date: '1 week ago',
    body: 'Pretty set and it has not turned my wrist green after two weeks, which is more than I can say for most.',
    verifiedPurchase: true,
    helpful: 7,
  },
  {
    id: 'dr-22',
    productId: '6a6b550e06f719678ebe7f2f',
    author: 'Nasir Danjuma',
    initials: 'ND',
    rating: 5,
    date: '3 weeks ago',
    body: 'Bought as a gift, the box it came in was lovely so I did not need to wrap it.',
    verifiedPurchase: true,
    helpful: 4,
  },
];

export const getProductReviews = (productId: string): Review[] =>
  DEMO_REVIEWS.filter(review => review.productId === productId);

/** Average rating, derived from the reviews so the two can never disagree. */
export const getProductRating = (productId: string): number | null => {
  const reviews = getProductReviews(productId);
  if (reviews.length === 0) return null;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};

export const getReviewCount = (productId: string): number => getProductReviews(productId).length;

/** How many reviews sit at each star level, for the distribution bars. */
export const getRatingBreakdown = (productId: string): { stars: number; count: number }[] => {
  const reviews = getProductReviews(productId);
  return [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(review => review.rating === stars).length,
  }));
};
