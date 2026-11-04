import fs from 'node:fs';
import path from 'node:path';

const sourcePath = process.argv[2];
if (!sourcePath) throw Error('Usage: node tools/import-switches.mjs <switches-catalogue.json>');
const supplement = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const target = 'dist/catalogue.json';
const catalogue = JSON.parse(fs.readFileSync(target, 'utf8'));
const original = catalogue.products.filter(product => !product.id.startsWith('switches-2026-'));
const existingCodes = new Set(original.flatMap(product => product.options.map(option => option.code)));
const importedCodes = new Set();
const colours = new Map([['أبيض','White'], ['بيج','Beige'], ['أسود','Black'], ['أحمر','Red']]);

const products = supplement.products.map(product => {
  const { pieces_per_pack: pieces, packs_per_box: packs } = product.packaging;
  const price = product.listed_price;
  if (!Number.isInteger(pieces) || pieces < 1 || price.unit !== 'pack' || !price.vat_included ||
      Math.abs(Number(price.amount) - Number(product.printed_piece_price_usd) * pieces) > 0.000001) {
    throw Error(`Invalid pack pricing: ${product.id}`);
  }
  const image = `${product.id.toLowerCase()}.webp`;
  if (!fs.existsSync(path.join('dist/assets', image))) throw Error(`Missing catalogue photo: ${image}`);
  const rawColour = product.variants[0]?.colour_as_supplied || '';
  const colour = product.category.id === 'switch_plate'
    ? product.exact_name.replace(/^(Joker|Karina|Hummer) [AB] |^New Hummer /, '').replace(/\bplate\b/g, '').trim()
    : rawColour.split(' / ').map(value => colours.get(value) || value).join(' / ');
  const specs = [product.exact_name, `${pieces} pieces per pack`,
    packs ? `${packs} packs per box (${pieces * packs} pieces)` : '', 'Sold in full packs',
    ...(product.facts.warranty?.values || []).map(value => `Warranty: ${value}`)]
    .filter(Boolean).join('; ');
  return {
    id: product.id,
    name: product.exact_name,
    category: product.category.en,
    categoryId: product.category.id,
    description: `Konnice Electric ${product.exact_name.toLowerCase()}. Supplied in full packs of ${pieces} pieces.`,
    page: product.source.page,
    image,
    imageAlt: `${product.exact_name} from the Konnice catalogue`,
    images: [],
    packaging: {piecesPerPack: pieces, packsPerBox: packs},
    options: product.codes.map(code => {
      if (existingCodes.has(code) || importedCodes.has(code)) throw Error(`Duplicate product code: ${code}`);
      importedCodes.add(code);
      return {code, color: colour, price: price.amount, unit:'pack', specs, length:null,
        piecesPerPack:pieces, packsPerBox:packs, piecePrice:product.printed_piece_price_usd};
    })
  };
});

catalogue.products = [...original, ...products];
catalogue.supplements = [{edition:'Konnice switches and sockets - May 2026', sourceSha256:supplement.source_sha256}];
fs.writeFileSync(target, JSON.stringify(catalogue));
console.log(JSON.stringify({addedFamilies:products.length, addedOptions:importedCodes.size,
  totalFamilies:catalogue.products.length, totalOptions:catalogue.products.reduce((n,p) => n + p.options.length, 0),
  categories:new Set(catalogue.products.map(p => p.category)).size}));
