const { fake } = require("faker");
var faker = require("faker");

var database = { products: [], categories: [] };

const categories = ["Men", "Women", "Kids", "Home and Living", "Beauty"];
const categorySlugs = ["men", "women", "kids", "home-and-living", "beauty"];

for (var i = 1; i <= 100; i++) {
  database.products.push({
    id: i,
    slug: faker.lorem.slug(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    star: Math.floor(Math.random() * 5) + 0,
    discount: 0,
    category: categorySlugs[Math.floor(Math.random() * 8) + 0],
    brand: faker.commerce.productAdjective(),
    image: faker.random.image(),
    color: faker.commerce.color(),
    description: faker.commerce.productDescription(),
  });
}

for (var i = 1; i < 9; i++) {
  database.categories.push({
    id: i,
    slug: categorySlugs[i],
    name: categories[i],
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
    parentId: 0,
  });
}

for (var i = 9; i < 25; i++) {
  database.categories.push({
    id: i,
    slug: faker.lorem.slug(),
    name: faker.name.findName(),
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
    parentId: Math.floor(Math.random() * 8) + 1,
  });
}

console.log(JSON.stringify(database));
