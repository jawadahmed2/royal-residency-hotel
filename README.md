# Royal Executive Residency — Website

Website for **Royal Executive Residency**, House No. 596, Khurram Road, G-9/1 Islamabad — *Best Family Guest House in Islamabad*.

Built with **React 19 + TypeScript + Vite** (frontend) and **Hono on Cloudflare Workers** (backend), deployed with Wrangler.

## What's on the site

- Grand Opening offer bar and discount banner (Double 4,500 → **3,500**, Triple 5,000 → **4,000**, Family 6,000 → **5,000** per night)
- Room cards for Rooms 101 / 102 / 104 with photo sliders and a full-screen photo viewer
- Monthly hostel plan — PKR 30,000/month with breakfast & dinner, Wi-Fi and laundry (deposit PKR 2,000 – 5,000)
- Amenities, filterable gallery, FAQ, Google Map and directions
- Booking form that opens a pre-filled WhatsApp message to 0319 5418054
- Booking.com link, phone and email (malikfasil7770@gmail.com)
- Flashing floating WhatsApp button (bottom-right) on every screen

Business details (phone, email, prices, rooms, photos) live in `src/react-app/data.ts`.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build
```

## Images & Cloudflare R2

Optimised images live in `public/media/`. The Worker serves `/media/*` from the R2 bucket
**`royal-residency-images`** (binding `IMAGES` in `wrangler.json`) and falls back to the bundled
copy when an object is not in the bucket — so the site works before and after the upload.

Upload all images to R2 (one time, and again whenever you change an image):

```bash
npx wrangler login
npm run upload:media
```

To add or replace a photo, put `<name>-lg.webp` (≈1920px wide) and `<name>-sm.webp` (≈900px wide)
in `public/media/`, reference `<name>` in `src/react-app/data.ts`, then re-run `npm run upload:media`.

## Deploy

```bash
npm run build && npm run deploy
```

Monitor the Worker with `npx wrangler tail`.
