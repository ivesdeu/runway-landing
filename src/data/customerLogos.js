/** Normalize Vite `base` so assets work on every route (not only `/`). */
function customerAsset(filename) {
  const raw = import.meta.env.BASE_URL || '/'
  const root = raw.endsWith('/') ? raw : `${raw}/`
  return `${root}customers/${filename}`
}

/** Local files in `/public/customers/` */
export const customerLogos = [
  { src: customerAsset('linkedin.png'), alt: 'LinkedIn', height: 28 },
  { src: customerAsset('stripe.png'), alt: 'Stripe', height: 28 },
  { src: customerAsset('google.png'), alt: 'Google', height: 32 },
  { src: customerAsset('youtube.png'), alt: 'YouTube', height: 28 },
  { src: customerAsset('cursor.png'), alt: 'Cursor', height: 28 },
  {
    src: customerAsset('ama.png'),
    alt: 'American Marketing Association',
    height: 28,
  },
  { src: customerAsset('plaid.png'), alt: 'Plaid', height: 28 },
  { src: customerAsset('claude.png'), alt: 'Claude', height: 32 },
]
