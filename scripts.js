const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Log each name and each province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

// Filterprovinces without Cape
const provincesWithoutCape = provinces.filter(province => !province.includes('Cape'));
console.log(provincesWithoutCape.length);

//Names that contain S
const containsS = names.map(name => name.includes('S')).some(Boolean);
console.log(containsS);

const provinceMapping = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(provinceMapping);
  

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log(products.map(product => product.product));

console.log(products.filter(product => product.product.length <= 5));

console.log(products
    .filter(product => product.price.trim() !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0));

    console.log(products.reduce((acc, product) => acc + product.product, ''));

//extreme price
const prices = products
  .filter(product => product.price.trim() !== '')
  .map(product => Number(product.price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);

console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

console.log(Object.entries(products).reduce((acc, [key, { product, price }]) => {
    acc[key] = { name: product, cost: price };
    return acc;
  }, {}));
  