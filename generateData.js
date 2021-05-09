var faker = require("faker");

var database = { products: [], categories: [] };

const categories = [
  "Electronics",
  "Electronics Accessories",
  "TV and Home Appliance",
  "Health and Beauty",
  "Home And Life Style",
  "Jwelery",
  "Clothing's",
  "Sports and Outdoor",
];

for (var i = 1; i <= 10; i++) {
  database.products.push({
    id: i,
    slug: faker.lorem.slug(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    star: Math.floor(Math.random() * 5) + 0,
    discount: 0,
    category: faker.commerce.department(),
    brand: faker.commerce.productAdjective(),
    image: faker.random.image(),
    color: faker.commerce.color(),
    description: faker.commerce.productDescription(),
  });
}

for (var i = 1; i <= 8; i++) {
  database.categories.push({
    id: i,
    slug: faker.lorem.slug(),
    name: categories[i],
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
  });
}

console.log(JSON.stringify(database));
