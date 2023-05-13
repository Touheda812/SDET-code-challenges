//________________________ Arithmetic Operators ________________________
// Write a program that declares two variables num1 and num2, assigns them number values, 
// and then calculates and prints the product of num1 and num2.

let num1 = 56;
let num2 = 100;
let product = num1 * num2; 
console.log(product); // Output: 5600

//Write a program that declares a variable radius and assigns it a number value representing the radius of a circle. 
//Then, use the exponentiation operator to calculate the area of the circle (pi times radius squared). Print the resulting area to the console.

let radius = 10; 
let area = Math.PI * radius ** 2;
console.log(area); //output: 314.1592653589793

//________________________ Assignment Operators ________________________
//Write a program that declares a variable count and assigns it an initial value of 5. Then, use the addition assignment operator to add 2 to count. Print the resulting value of count to the console.
let count = 5;
count +=2;
console.log(count); //output: 7

//Write a program that declares a variable price and assigns it an initial value of 10. Then, use the multiplication assignment operator to multiply price by 2.5. Print the resulting value of price to the console.
let price = 10; 
price *=2.5;
console.log(price); //output: 25

//________________________ Comparison Operators ________________________
// Write a program that declares two variables age1 and age2, assigns them number values representing the ages of two different people, and then uses the greater than operator to determine if age1 is greater than age2. Print the resulting boolean value to the console.
let age1 = 21;
let age2 = 24; 
let ages = age1 > age2; 
console.log(ages); //output: false

//Write a program that declares a variable name and assigns it a string value representing a person's name. Then, use the not equal to operator to determine if name is not equal to the string "John Doe". Print the resulting boolean value to the console.
let name1 = 'Touheda Khanom';
let name2 = "John Doe"; 
let isNotequal = name1 !== name2; 
console.log(isNotequal); //output: true

//________________________ Logical Operators ___________________________
// Write a program that declares two variables isMember and hasCoupon, assigns them boolean values indicating whether or not a customer is a member and whether or not they have a coupon code, and then uses the logical OR operator to determine if the customer is eligible for free shipping. Print the resulting boolean value to the console.
let isMember = true;
let hasCoupon = false; 
let isEligible = isMember || hasCoupon; 
console.log(isEligible); //output: true

//Write a program that declares a variable num and assigns it a number value. Then, use the logical NOT operator to determine if num is not equal to 0. Print the resulting boolean value to the console.
let num = 34; 
let notEqual = !(num === 0); 
console.log(notEqual); //output: true

//________________________ Conditional (Ternary) Operator ________________________
// Write a program that declares a variable age and assigns it a number value representing a person's age. Then, use the conditional operator to determine if the person is old enough to vote. If the person is old enough, print the string "You are old enough to vote" to the console. Otherwise, print the string "You are not old enough to vote" to the console.
let age = 12;
let oldEnough= age >= 18? "You are old enough to vote" : "You are not old enough to vote"; 
console.log(oldEnough); //You are not old enough to vote

// Write a program that declares a variable price and assigns it a number value representing the price of a product. Then, use the conditional operator to determine if the product is on sale. If the product is on sale, print the string "The product is on sale" to the console. Otherwise, print the string "The product is not on sale" to the console.
let productPrice = 50;
let onSale = productPrice < 40? "The product is on sale" : "The product is not on sale"; 
console.log(onSale); //The product is not on sale