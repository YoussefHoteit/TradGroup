# Trad Group

A responsive lighting and electrical supply website for Trad Group in Lebanon.

## Run locally

Requires Node.js 20 or later. No dependency installation or build step is needed.

```sh
npm start
```

Open `http://127.0.0.1:4317`.

## Website

- Home, shop, inspiration, company story, contact and privacy pages.
- Full catalogue: 191 product families, 290 option rows and 20 categories.
- Product search, category filters, price sorting and pagination.
- Product option details, quantities and a quote list saved in the visitor's browser.
- Downloadable product lists and project enquiries.
- An image-integrated header, compact scrolling navigation and a full-screen mobile menu.
- Editorial collection imagery, scroll reveals, an interactive lighting mood scene and reduced-motion support.

## Catalogue and enquiries

`dist/catalogue.json` contains a selected export of the owner-updated catalogue workbook dated 14 October 2026. Listed prices are USD retail prices including VAT. The website does not represent live stock; wholesale prices, availability, delivery and installation are confirmed separately by the store.

Product images are extracted from the supplied lighting catalogue and illustrate product families. Exact model information follows the selected option code. Architectural imagery is illustrative, rather than a completed client project.

The enquiry form prepares a text file locally. It does not send a message or create an order. Add a verified business contact or enquiry backend before enabling direct submission. No sales agent credentials, customer history or campaign database is included.

## Deployment

The public website is hosted at https://tradgroup.pages.dev using Cloudflare Pages. The connected `YoussefHoteit/TradGroup` repository deploys the `main` branch automatically, with framework preset `None`, no build command, and output directory `dist`.

Routes use URL fragments, so no rewrite rules are needed. A separate private preview configuration is retained in `.openai/hosting.json`. Google Fonts is the only externally loaded page resource; all imagery is stored locally.

## Design files

`dist/atelier.css` defines the charcoal, mineral and brass visual system on top of the catalogue layout in `dist/style.css`. `dist/showroom.js` renders the editorial homepage. `dist/navigation.js` manages the scrolling header, active navigation state and accessible mobile menu.

## Checks

```sh
npm run check
```
