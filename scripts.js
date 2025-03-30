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
