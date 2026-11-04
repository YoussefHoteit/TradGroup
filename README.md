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
- Full catalogue: 296 product families, 405 option rows and 24 categories.
- Product search, category filters, price sorting and pagination.
- Product option details, quantities and a quote list saved in the visitor's browser.
- Downloadable product lists and project enquiries.
- An image-integrated header, compact scrolling navigation and a full-screen mobile menu.
- Editorial collection imagery, scroll reveals, an interactive lighting mood scene and reduced-motion support.

## Catalogue and enquiries

`dist/catalogue.json` contains a selected export of the owner-updated lighting catalogue workbook dated 14 October 2026, plus the verified Konnice switches and sockets supplement from May 2026. The supplement adds 105 families and 115 codes across Electrical switches, Electrical sockets, Switch plates and Switch accessories. Listed prices are USD retail prices including VAT. The website does not represent live stock; wholesale prices, availability, delivery and installation are confirmed separately by the store.

Switches and sockets are priced by full pack, with the pack size shown beside each price and quantity field. Pack sizes, VAT and the corrected 80-piece NH-303-W pack follow the owner-confirmed sales agent data.

To refresh the supplement after its product photos have been added, run `node tools/import-switches.mjs <path-to-switches-catalogue.json>`. The importer checks pack prices, duplicate codes and required images while preserving the existing lighting records.

Product images are extracted from the supplied lighting and switches catalogues. Lighting images illustrate product families; supplement images show their corresponding catalogue entries. Exact model information follows the selected option code. Architectural imagery is illustrative, rather than a completed client project.

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
