# InterviewAI website

Marketing site for [InterviewAI](https://www.interviewai.cc), the AI-made UKVI credibility interview prep tool.
The app itself lives in `../InterviewAI` and is deployed at `https://www.app.interviewai.cc`.

Next.js 16 (App Router, Cache Components), React 19, TypeScript and Tailwind CSS v4. Every page is statically prerendered;
the only server code is the contact form action.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | This site's URL (canonical URLs, sitemap, Open Graph). Default `https://www.interviewai.cc` |
| `NEXT_PUBLIC_APP_URL` | Where every "Try now" button goes. Default `https://www.app.interviewai.cc/` |
| `CONTACT_FROM_EMAIL` | Sender, on a domain verified in Resend |
| `RESEND_API_KEY` | API key from https://resend.com (free tier) |
| `CONTACT_TO_EMAIL` | Where contact messages are delivered |

Without SMTP credentials, the contact form logs messages in development and shows an error in production.

## Editing content

You don't need to touch components to change copy:

| What | Where |
|---|---|
| URLs, email, dates, socials, jurisdiction, UTM toggle | `src/lib/config.ts` |
| Navigation, footer, disclaimer | `src/content/site.ts` |
| Home page sections | `src/content/home.ts` |
| Features (each has a `source` pointing at the app code that proves it) | `src/content/features.ts` |
| FAQs (home and pricing; also used for FAQPage JSON-LD) | `src/content/faq.ts` |
| Pricing, /interview-ai, /about, /contact, 404 | `src/content/pages.ts` |
| Testimonials (**placeholders**: set `placeholder: false` when real) | `src/content/testimonials.ts` |
| Privacy policy and terms (**drafts**: get legal review) | `src/content/legal.ts` |
| Titles and meta descriptions | `src/content/seo.ts` |
| Example data in the product mockups | `src/content/sample-report.ts` |

Design tokens (light and dark colors) live at the top of `src/app/globals.css`. Components use token names only.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
