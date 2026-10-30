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
- Scroll reveals, entrance animations, an interactive lighting mood scene and reduced-motion support.

## Catalogue and enquiries

`dist/catalogue.json` contains a selected export of the owner-updated catalogue workbook dated 14 October 2026. Listed prices are USD retail prices including VAT. The website does not represent live stock; wholesale prices, availability, delivery and installation are confirmed separately by the store.

Product images are extracted from the supplied lighting catalogue and illustrate product families. Exact model information follows the selected option code. Architectural interior imagery is illustrative, rather than a completed client project.

The enquiry form prepares a text file locally. It does not send a message or create an order. Add a verified business contact or enquiry backend before enabling direct submission. No sales agent credentials, customer history or campaign database is included.

## Deployment

Deploy the `dist` directory to a static host. Routes use URL fragments, so no rewrite rules are needed. A private hosted preview is configured separately through `.openai/hosting.json`. Google Fonts is the only externally loaded page resource; all product images and the hero are local assets.

## Checks

```sh
npm run check
```
