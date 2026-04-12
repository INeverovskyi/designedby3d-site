# DesignedBy3D — Project Documentation

## Quick Links

| Resource | URL |
|----------|-----|
| Website | https://designedby3d-site.vercel.app |
| Admin (Sanity) | https://designedby3d-site.vercel.app/admin |
| GitHub Repo | https://github.com/INeverovskyi/designedby3d-site |
| Vercel Dashboard | https://vercel.com/dashboard |
| Sanity Manage | https://www.sanity.io/manage |
| LiqPay Dashboard | https://www.liqpay.ua/admin/ |

---

## Tech Stack

### Frontend
- **Next.js 16.2.3** — React framework (App Router)
- **React 19.2.4** — UI library
- **TypeScript 5** — Type safety
- **Tailwind CSS 4** — Styling
- **shadcn/ui** — Component library
- **Framer Motion** — Animations
- **Lucide React** — Icons

### CMS & Data
- **Sanity v5.20.0** — Headless CMS
  - Project ID: `nmltjuqs`
  - Dataset: `production`
  - Studio mounted at `/admin`

### Hosting & Deployment
- **Vercel** — Auto-deploy on push to `main`
- **GitHub** — https://github.com/INeverovskyi/designedby3d-site

### Payments
- **LiqPay (ПриватБанк)** — Payment gateway
  - Supports: Visa, Mastercard, Google Pay, Apple Pay
  - Sandbox mode for testing
  - Live mode requires verified merchant account

---

## Project Structure

```
DesignedBy3d_site/
├── src/
│   ├── app/
│   │   ├── (routes)
│   │   │   ├── page.tsx              # Home page
│   │   │   ├── about/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   ├── commissions/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── faq/page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx          # Products listing (from Sanity)
│   │   │   │   └── [slug]/page.tsx   # Product detail page
│   │   │   └── shop/
│   │   │       └── page.tsx          # Categories → external WooCommerce
│   │   ├── admin/[[...tool]]/        # Sanity Studio (CMS admin)
│   │   ├── api/
│   │   │   └── payment/
│   │   │       ├── liqpay/route.ts   # POST → create LiqPay payment
│   │   │       └── liqpay-callback/route.ts  # POST ← LiqPay webhook
│   │   ├── payment/success/page.tsx  # Payment confirmation page
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── product-carousel.tsx
│   │   │   ├── hot-sale-section.tsx
│   │   │   ├── category-showcase.tsx
│   │   │   ├── how-we-work.tsx
│   │   │   ├── about-section.tsx
│   │   │   └── seo-content.tsx
│   │   ├── shared/
│   │   │   ├── buy-button.tsx        # LiqPay payment button
│   │   │   ├── product-card.tsx
│   │   │   ├── category-card.tsx
│   │   │   ├── glow-button.tsx
│   │   │   ├── gradient-text.tsx
│   │   │   └── section-heading.tsx
│   │   └── ui/                       # shadcn/ui components
│   ├── lib/
│   │   ├── data.ts                   # Static data (hero slides, categories)
│   │   ├── constants.ts              # Site config
│   │   ├── utils.ts
│   │   └── liqpay.ts                 # LiqPay payment utility
│   └── sanity/
│       ├── studio.ts                 # Sanity Studio config
│       ├── config.ts
│       ├── client.ts                 # Sanity client + urlFor helper
│       ├── queries.ts                # GROQ queries
│       └── schemas/
│           ├── index.ts
│           └── product.ts            # Product schema
├── public/
├── .env.local                        # Environment variables (local only)
├── .env                              # (if exists, also local)
├── package.json
├── next.config.ts
├── tsconfig.json
└── vercel.json (if exists)
```

---

## Sanity CMS — Product Schema

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Product name (required) |
| `slug` | slug | URL slug, auto-generated from name (required) |
| `price` | number | Price in USD (required, positive) |
| `salePrice` | number | Discounted price |
| `category` | string | figurines, jewelry, decor, custom |
| `image` | image | Main product photo |
| `description` | text | Product description |
| `inStock` | boolean | Stock availability |
| `featured` | boolean | Show on homepage |

**Sanity queries:**
- `getAllProducts()` — all products
- `getFeaturedProducts()` — featured products (max 8)
- `getSingleProduct(slug)` — single product by slug

---

## Environment Variables

### Local (`.env.local`)

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=nmltjuqs
NEXT_PUBLIC_SANITY_DATASET=production

# LiqPay Payment Gateway
LIQPAY_PUBLIC_KEY=i7470...         # Public key (sandbox or live)
LIQPAY_PRIVATE_KEY=...             # Private key (sandbox or live)

# Site URL for payment redirects
NEXT_PUBLIC_SITE_URL=https://designedby3d-site.vercel.app
```

### Vercel Environment Variables

| Variable | Value | Environments |
|----------|-------|--------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `nmltjuqs` | All |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | All |
| `LIQPAY_PUBLIC_KEY` | `sandbox_i23344335661` | All |
| `LIQPAY_PRIVATE_KEY` | `sandbox_7nNIT60MH1Ozdr0wnRaoh1qZtfWYtCz4euNg10A3` | All |
| `NEXT_PUBLIC_SITE_URL` | `https://designedby3d-site.vercel.app` | All |

---

## API Keys & Credentials

### Sanity CMS
| Credential | Value |
|------------|-------|
| Project ID | `nmltjuqs` |
| Dataset | `production` |
| Write Token | `sk3zVSqosXAAMVzRccZV7w51CUefejHd20k44u4AxhBqUmZKcLfCM3uEklZt3GkRl5gSVmmI0FbtYhsH7cFgxVmpblzS5n9dUs8tsackrtvQNJl7wvXk8gKnfp4VF9WMOL4gWxhs2dGkBbJidwUZygSF9RzggJm3qNXxgcBrsnxY0JDTfnbT` |
| Manage URL | https://www.sanity.io/manage |

### LiqPay (Sandbox — тестовий режим)
| Credential | Value |
|------------|-------|
| Public Key | `sandbox_i23344335661` |
| Private Key | `sandbox_7nNIT60MH1Ozdr0wnRaoh1qZtfWYtCz4euNg10A3` |
| Dashboard | https://www.liqpay.ua/admin/ |

> **Важливо:** Для переходу на live-режим потрібно:
> 1. Верифікувати мерчант акаунт в LiqPay
> 2. Замінити sandbox ключі на live ключі (на Vercel та в `.env.local`)
> 3. Зареєструвати домен в кабінеті LiqPay

---

## Payment Flow (LiqPay)

1. User clicks **"Купити"** on product page
2. Client calls `POST /api/payment/liqpay` with `{productName, amount, productId}`
3. Server generates LiqPay payment form data + signature
4. Client submits form to `https://www.liqpay.ua/api/3/checkout`
5. User completes payment on LiqPay
6. LiqPay redirects user to `/payment/success`
7. LiqPay sends callback to `/api/payment/liqpay-callback` (webhook)

---

## Deployment Workflow

```bash
# Local development
npm run dev              # http://localhost:3000
npm run build            # Build for production
npm run start            # Run production build locally

# Push to deploy (Vercel auto-deploys on push to main)
git add -A && git commit -m "message"
git push origin main
```

Vercel automatically:
1. Detects push to `main`
2. Runs `npm run build`
3. Deploys if build succeeds
4. Provides preview URL for PRs

---

## Known Issues & Notes

1. **Sanity documents with `_system` field** — occur when data is imported/migrated. These documents become read-only in Studio. Fix: delete and recreate via API or Studio.

2. **Sandbox mode** — LiqPay sandbox only shows card input. Google Pay / Apple Pay appear in live mode only.

3. **Static vs Dynamic pages** — `/products` is statically generated (revalidate: 60s), `/products/[slug]` is server-rendered on demand.

4. **Environment variables** — `.env.local` is NOT committed to git. Vercel env vars must be set manually in Vercel Dashboard → Settings → Environment Variables.
