# YONMAZ485_FT02410_GroupA_Yonela-Mazele_DJS06

This project is designed to challenge and deepen your understanding of JavaScript's powerful array methods. You'll manipulate data using forEach, map, filter, reduce, and more, to perform a variety of tasks. This exercise will test your ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

The essence of using these higher-order functions is to encourage a declarative approach to programming: you define what you want to achieve (e.g., filter a list, transform data) without having to specify how to perform the operations step-by-step (as you would with imperative loops like for or while). This leads to more readable, concise, and often more maintainable code. Additionally, these functions can help avoid side effects and create pure functions, both key aspects of functional programming.

Data Sets
 

You will work with two primary datasets:

A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
Exercises
 

ForEach Basics: Use forEach to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
Uppercase Transformation: Use map to create a new array of province names in all uppercase. Log the new array to the console.
Name Lengths: Create a new array using map that contains the length of each name.
Sorting: Use sort to alphabetically sort the provinces.
Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.
Creating Object Mapping: Use reduce to transform the names array into an object mapping names to their respective provinces.
Advanced Exercises (Single console.log Execution)
 

For these exercises, wrap your logic in a single console.log statement:

Log Products: Iterate over the products array, logging each product name.
Filter by Name Length: Filter out products with names longer than 5 characters.
Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
Concatenate Product Names: Use reduce to concatenate all product names into a single string.
Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.