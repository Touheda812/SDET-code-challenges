// Create an array of products with at least 5 products. Each product should have the following properties:
const products = [
    {name: 'Product A', price: 10, quantity: 5},
    {name: 'Product B', price: 20, quantity: 3},
    {name: 'Product C', price: 15, quantity: 7},
    {name: 'Product D', price: 25, quantity: 2},
    {name: 'Product E', price: 30, quantity: 4}
]; 

// Loop through the array using a for loop and print out the name and price of each product.
for(let i=0; i< products.length; i++){
    let product1 = products[i]; 
    console.log(`${product1.name}:${product1.price}`);
}

// Use a while loop to find  the product with the lowest price. Print out the name and price of the product.
let p = 0;
let lowestProduct = products[p]; 
while (p<products.length) {
    if(products[p].price < lowestProduct.price){
        lowestProduct = products[p]; 
    }
    p++;
}
console.log(`${lowestProduct.name} is the cheapest at $${lowestProduct.price}`);

// Use a for of loop to calculate the total value of all products in the array.
let productValue = 0; 
for (let product of products) {
    let PriceQuantity = product.price * product.quantity;
    // console.log(PriceQuantity);
    productValue += PriceQuantity; 
    
}
console.log(`The total value of all products in the array -> ${productValue}`);

//Use a for in loop to print out all the properties of each product in the array.
for (let key in products) {
    let productV = products[key];
    console.log(`Name: ${productV.name}`);
    console.log(`Price: ${productV.price}`);
    console.log(`Quantity: ${productV.quantity}\n`);
    }

// Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
let i = 1; 
for(i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
    else if(i%3==0){
        console.log('Fizz');
    }
    else if(i%5==0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}