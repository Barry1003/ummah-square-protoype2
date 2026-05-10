Design the homepage for Ummah Square — a Nigerian Muslim-owned business marketplace. The mental model is a digital mall, not a product catalogue. Users are not browsing products first — they are discovering stores, and within each store it feels like stepping into that vendor's own world. Products surface through discovery and exploration, not as the primary interface. The platform serves the Nigerian Muslim community and champions trust, locality, and ethical commerce.
Tagline: Shop Local. Shop Halal.
Subtext: Verified Muslim-owned businesses across Nigeria

BRAND & VISUAL IDENTITY

Primary color: Deep trustworthy blue — use #1B4FCC as placeholder until exact brand hex is confirmed
Secondary color: Warm gold/amber #D4A017 — used sparingly as an accent for badges, highlights, CTAs
Background: Clean white #FFFFFF with off-white section breaks #F8F8F6
Text: Near-black #111111 for headings, #444444 for body, #888888 for metadata
Success/Trust: Soft green #1A7A4A for verified badges only
Feel: Modern, warm, community-driven, premium but accessible. Not cold corporate. Not generic ecommerce. Think — what if a Nigerian neighbourhood market had a world-class digital presence.
Typography: Strong display font for headings (something with character — not Inter, not Roboto). Clean readable sans-serif for body. Clear hierarchy between H1, H2, card titles, metadata.
Corner radius: 16px on large cards, 12px on product cards, 8px on pills/chips, fully rounded on buttons
Shadows: Subtle, warm — box-shadow: 0 4px 24px rgba(0,0,0,0.07) on cards. Not harsh or flat.
Spacing: Generous. Section padding 80px top/bottom desktop, 48px mobile. Card gaps 20px.


LAYOUT RULES

Desktop: Max content width 1280px, centered
Show desktop layout primarily, with mobile consideration visible
Grid: 12-column
Horizontal scroll sections use a peek of the next card to signal scrollability
No section should look identical to the one above or below it — vary background, card size, layout rhythm


HOMEPAGE SECTIONS — DETAILED

SECTION 1 — NAVBAR
Height: 64px desktop, 56px mobile. Sticky on scroll with subtle backdrop blur.
Left: Ummah Square logo (text + icon mark)
Center: Search bar — rounded pill shape, placeholder text "Search stores, products, brands...", search icon left inside bar, subtle border
Right: Cart icon with badge counter, "Sign In" text link, "Sign Up" filled blue button (small, rounded)
On scroll: add white background with box-shadow: 0 2px 12px rgba(0,0,0,0.08)

SECTION 2 — HERO
Full width. Height: 520px desktop, auto mobile.
Background: Not plain white. Use a subtle geometric Islamic-inspired tile pattern at very low opacity (5–8%) over a light blue-tinted background (#EEF3FF). The pattern should feel like texture, not decoration — barely visible but adds richness.
Content layout: Two-column on desktop. Left column (60%) has the text and search. Right column (40%) shows a floating store card preview — a 3D-tilted or slightly rotated store card with a product grid inside it, hinting at the mall experience.
Left column content:

Eyebrow text (small caps, blue): NIGERIA'S MUSLIM MARKETPLACE
H1 headline (large, bold, 56px desktop): "Shop Local. " — then on new line in gold accent color: "Shop Halal."
Subtext (16px, muted): "Discover verified Muslim-owned stores across Nigeria — from fashion to food to services."
Search bar: Full width of column, 56px tall, rounded pill, white background, strong shadow, Products | Services toggle pills inside right side of bar, prominent blue search button
Below search: small trust signals in a row — green checkmark + "Verified Vendors" · shield icon + "Escrow Protected" · location pin + "Local First"

Right column content:

A mockup of a store card floating at slight rotation/tilt
Card shows: store banner image, store logo, store name, 3 tiny product thumbnails in a row
Subtle glow/shadow behind it


SECTION 3 — CATEGORY PILLS
Background: White. Padding: 32px vertical.
Heading (left aligned, small): "Browse by category"
Horizontally scrollable row of category chips. Each chip:

Icon + label
Rounded pill shape
Default: white background, blue border, blue text
Active/hover: blue fill, white text
Categories: 🧕 Fashion, 🍲 Food & Groceries, 🛠 Services, 💍 Accessories, 📚 Books & Media, 🏠 Home & Living, 💊 Health & Wellness, ➕ More


SECTION 4 — FEATURED STORE SPOTLIGHT
Background: Deep blue #1B4FCC. White text on top.
Section label (top left, small caps, gold): FEATURED STORE
Large cinematic card — full width minus 40px padding each side. Inside:
Left side (40%): Store identity

Store banner fills the left panel as background image with dark overlay
Store logo centered on overlay
Store name (H2, white, bold)
Store category tag (gold pill)
Short store tagline (white, 14px, italic)
Star rating + review count
"Visit Store →" button (white background, blue text)

Right side (60%): Product preview grid

3 product cards in a row
Each card: product image (square), product name, price in ₦
Cards have white background, rounded corners
Bottom of panel: "12 products available" in small muted text

Below the card: dot pagination indicators for multiple featured stores

SECTION 5 — NEW ARRIVALS
Background: White.
Section header row:

Left: H2 "New Arrivals" + small subtitle "Fresh from our vendors"
Right: "View All →" link in blue

Horizontally scrollable row of product cards. Each card (200px wide, auto height):

Product image (square, fills top of card, rounded corners top)
"NEW" badge top-left corner (blue pill)
Product name (14px, bold, max 2 lines)
Store name (12px, muted, with small store avatar dot)
Price (16px, bold, blue)
Subtle hover state: card lifts slightly, shadow deepens


SECTION 6 — TRENDING STORES
Background: Off-white #F8F8F6.
Section header: H2 "Trending Stores" + subtitle "The most visited stores this week"
Grid layout: 3 columns desktop, 2 columns tablet, 1 column mobile. 3 rows visible (9 stores total).
Each store card (rich, this is the hero component):

Top: Store banner image (full width of card, 140px tall, object-fit cover)
Overlaid on banner bottom-left: Store logo (40px circle, white border) + Store name (white, bold, 15px)
Category tag pill (bottom-right of banner, semi-transparent dark background)
Below banner: product thumbnails row — 3 square thumbnails (64px each) in a horizontal strip
Bottom strip: "🔥 Trending" badge left + "Visit Store →" right in blue text
Hover state: slight scale up (1.02), shadow deepens, banner gets slight brightness boost


SECTION 7 — BEST SELLERS
Background: White.
Section header: H2 "Best Sellers" + "🔥 What everyone's buying"
Layout: Different from New Arrivals. Use a larger card format — 2 rows of 4 cards in a grid (not horizontal scroll). Cards are wider, portrait orientation.
Each card:

Product image (taller, 3:4 ratio)
"HOT" badge in gold
Product name
Store name (clickable, blue)
Price
Rating stars (small, below price)


SECTION 8 — NEAR YOU
Background: Light blue tint #EEF3FF.
Section header: H2 "Near You" + subtitle "Stores in your area" + location chip showing "📍 Lagos, NG" with a small edit link
Grid of store cards (similar to Trending Stores but with a distance badge):

Each card has all the same elements as Trending Store cards
Additional: distance badge top-right corner — e.g. "2.3km away" in a white pill with pin icon


SECTION 9 — SHOP BY CATEGORY EDITORIAL BLOCKS
Background: White.
Two large editorial blocks side by side (50/50 split desktop, stacked mobile):
Block 1 — Fashion & Clothing:

Full bleed background image of modest fashion/hijabs
Dark gradient overlay
Category label: "Fashion & Clothing"
Product count: "48 products"
"Shop Now →" button (white outline)

Block 2 — Food & Groceries:

Full bleed background image of Nigerian food/spices
Dark gradient overlay
Category label: "Food & Groceries"
Product count: "34 products"
"Shop Now →" button (white outline)


SECTION 10 — SERVICES
Background: Dark section — deep navy #0D1B3E.
Section header (white): H2 "Need a Service?" + subtitle (muted white) "Professional services from trusted providers"
Horizontal scroll of service vendor cards (dark card style):

Card background: slightly lighter navy #162447
White border: 1px, 10% opacity
Service category icon (gold, top)
Vendor name (white, bold)
Service type tag (gold pill)
Location (muted white, small)
Rating stars (gold)
"Top Rated" badge where applicable
"View Services →" CTA (gold text)


SECTION 11 — TRUST BAR
Background: White. Border top and bottom: 1px #EEEEEE.
Three columns, centered, with generous spacing:
Column 1: Shield icon (blue) + "Escrow Protection" (bold) + "Your money is safe until delivery is confirmed" (small muted)
Column 2: Checkmark icon (green) + "Verified Vendors" (bold) + "Every store is reviewed and approved by our team" (small muted)
Column 3: Crescent/halal icon (gold) + "Halal Certified" (bold) + "Committed to ethical, halal commerce" (small muted)

SECTION 12 — FOOTER
Background: Deep navy #0D1B3E. White text.
4-column layout:

Col 1: Logo + tagline + social icons
Col 2: Marketplace links (Home, Discover, Vendors, Orders)
Col 3: Company links (About, Blog, Careers, Contact)
Col 4: "Become a Vendor" CTA box with blue button

Bottom bar: copyright + privacy policy + terms

OVERALL DESIGN NOTES

The page should feel like it has rhythm — sections alternate between white and tinted backgrounds creating natural breathing room
The Trending Stores section is the most important component on the page — it should feel like the most premium, carefully designed element
Every section must feel distinct — vary card sizes, layouts, background tones
Generous whitespace throughout — nothing should feel cramped
The hero right-column store card mockup sets the tone for what the whole platform is about — a visitor should understand "this is a mall of stores" from the hero alone without reading anything


That's your full prompt. Paste it into both Figma Make and Stitch exactly as-is and compare what comes back.