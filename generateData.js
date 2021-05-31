const { fake } = require("faker");
var faker = require("faker");

var database = { products: [], categories: [] };

const categories = [
  "Men",
  "Women",
  "Kids",
  "Home and Living",
  "Beauty",
  "Top Wear",
  "Festive Wear",
  "Bottom Wear",
  "Inner Wear and Sleep Wear",
  "Footwear",
  "Sports and Active Wear",
  "Fashion Accessories",
  "Fusion Wear",
  "Western Wear",
  "Footwear",
  "Sports and Active Wear",
  "Lingerie & Sleepwear",
  "Beauty & Personal Care",
  "Jewellery",
  "Boys Clothing",
  "Girls Clothing",
  "Boys Footwear",
  "Girls Footwear",
  "Bed Linen & Furnishing",
  "Flooring",
  "Bath",
  "Lamps & Lighting",
  "Home Decor",
  "Kitchen & Table",
  "Makeup",
  "Skincare, Bath & Body",
  "Haircare",
  "Fragrances",
  "Appliances",
  "Men's Grooming",
];
const categorySlugs = [
  "men",
  "women",
  "kids",
  "home-and-living",
  "beauty",
  "top-wear",
  "festive-wear",
  "bottom-wear",
  "inner-wear-and-sleep-wear",
  "footwear",
  "sports-and-active-wear-men",
  "fashion-accessories",
  "fusion-wear",
  "western-wear",
  "footwear",
  "sports-and-active-wear-women",
  "lingerie-&-sleepwear",
  "beauty-&-personal-care",
  "jewellery",
  "boys-clothing",
  "girls-clothing",
  "boys-footwear",
  "girls-footwear",
  "bed-linen-&-furnishing",
  "flooring",
  "bath",
  "lamps-&-lighting",
  "home-decor",
  "kitchen-&-table",
  "makeup",
  "skincare-bath-&-body",
  "haircare",
  "fragrances",
  "appliances",
  "men's-grooming",
];

for (var i = 1; i <= 200; i++) {
  database.products.push({
    id: i,
    slug: faker.lorem.slug(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    star: Math.floor(Math.random() * 5) + 0,
    discount: 0,
    category: categorySlugs[Math.floor(Math.random() * 34) + 0],
    brand: faker.commerce.productAdjective(),
    image: faker.random.image(),
    color: faker.commerce.color(),
    description: faker.commerce.productDescription(),
  });
}

for (var i = 0; i < 5; i++) {
  database.categories.push({
    id: i + 1,
    slug: categorySlugs[i],
    name: categories[i],
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
    parentId: 0,
  });
}

for (var i = 7; i < 35; i++) {
  database.categories.push({
    id: i,
    slug: categorySlugs[i],
    name: categories[i],
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
    parentId: Math.floor(Math.random() * 6) + 1,
  });
}

console.log(JSON.stringify(database));
