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
  
