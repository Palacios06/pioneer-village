const componentCategories: Map<number, string> = new Map();

const categories = [
  'ACCESSORIES',
  'AMMO_PISTOLS',
  'AMMO_RIFLES',
  'APRONS',
  'ARMOR',
  'BADGES',
  'BELTS',
  'BELT_BUCKLES',
  'BODIES_LOWER',
  'BODIES_UPPER',
  'BOOTS',
  'BOOT_ACCESSORIES',
  'CHAPS',
  'CLOAKS',
  'COATS',
  'COATS_CLOSED',
  'EYES',
  'EYEWEAR',
  'GAUNTLETS',
  'GLOVES',
  'GUNBELTS',
  'HAIR',
  'HATS',
  'HEADS',
  'HOLSTERS_CROSSDRAW',
  'HOLSTERS_KNIFE',
  'HOLSTERS_LEFT',
  'HOLSTERS_RIGHT',
  'JEWELRY_BRACELETS',
  'JEWELRY_RINGS_LEFT',
  'JEWELRY_RINGS_RIGHT',
  'LEGS_ACCESSORIES',
  'LOADOUTS',
  'MASKS',
  'MASKS_LARGE',
  'NECKTIES',
  'NECKWEAR',
  'PANTS',
  'PONCHOS',
  'SATCHELS',
  'SHIRTS_FULL',
  'SKIRTS',
  'SPATS',
  'SUSPENDERS',
  'VESTS',
  'HORSE_ACCESSORIES',
  'HORSE_BEDROLLS',
  'HORSE_BLANKETS',
  'HORSE_BRIDLES',
  'HORSE_MANES',
  'HORSE_MUSTACHE',
  'HORSE_SADDLEBAGS',
  'HORSE_SADDLES',
  'HORSE_SHOES',
  'HORSE_TAILS',
];

for (const category of categories) {
  componentCategories.set(GetHashKey(category), category);
}

export default componentCategories;
