/** Create a class called Animal that has a name property and a speak method. The speak method should log a message to the 
 * console saying "Hello, my name is {name}." Create an instance of the Animal class and call the speak method.
*/
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const animal = new Animal('Leo');
animal.speak();

/** Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying 
 * "Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.
*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let userNameAge = new Person('Touheda', 22);
userNameAge.greet();

/**
 * Create a class called Car that has make, model, and year properties, and a start method that logs a message to the 
 * console saying "The {make} {model} is starting." Create an instance of the Car class and call the start method.
 */

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    start(){
        console.log(`The ${this.make} ${this.model} is starting.`);

    }
}
let carMakeModel = new Car('Toyota', 'Camry', 2021 );
carMakeModel.start();

/**
 * Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the 
 * rectangle. Create an instance of the Rectangle class and call the getArea method.
 */
class Rectangle{
    constructor(width, height){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.width; 
    }
}
let areaOfRectangle = new Rectangle(20, 40); 
console.log(`The area of the Rectangle is --> ${areaOfRectangle.getArea()}`);

/**
 * Create a class called Square that extends the Rectangle class and has a sideLength property. Override the getArea method 
 * in the Square class to return the area of the square. Create an instance of the Square class and call the getArea method.
 */
class Square extends Rectangle{
    constructor(sideLength){
        super(sideLength, sideLength);
        this.sideLength = sideLength; 
    }
    getArea(){
        return this.sideLength ** 2; 
    }
}
let rectangleSideLength = new Square(5);
console.log(`New Rectange with the side length is --> ${rectangleSideLength.getArea()}`); 

/**
 * Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, and a deposit method
 *  that takes in an amount and adds it to the balance. Create an instance of the BankAccount class and call the deposit method 
 * with an amount.
 */
class BankAccount{
    constructor(accountNumber,accountHolderName, balance){
        this.accountNumber = accountNumber; 
        this.accountHolderName = accountHolderName; 
        this.balance = balance; 
    }
    deposit(amount){
        this.balance += amount; 
    }
}
let bankAccountBalance = new BankAccount('34523432', 'Joe', 34040);
bankAccountBalance.deposit(4000);
console.log(`Account Balance is --> $${bankAccountBalance.balance}`); 

/**
 * Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an 
 * email to the person's email address. Create an instance of the Person class and call the sendEmail method with a message.
 */

class Person1{
    constructor(name, email){
        this.name = name; 
        this.email = email;
    }
    sendEmail(message){
        console.log(`Sending Email to ${this.name} at ${this.email}: ${message}`);
    }
}
let messageToEmail = new Person1('Touhea', 'touhedakhanom@example.com');
messageToEmail.sendEmail("Hello we have a meeting today at 10 PM."); 

/**
 * Create a class called Product that has name, price, and description properties, and a discount method that takes in a
 *  percentage and returns the discounted price. Create an instance of the Product class and call the discount method with a 
 * percentage.
 */

class Product{
    constructor(name, price, description){
        this.name = name; 
        this.price = price; 
        this.description = description;
    }
    discount(percentage){
        const discountAmount = (percentage / 100)* this.price; 
        return this.price - discountAmount; 
    }
}
const product = new Product('iPhone', 1000, 'Smartphone');
console.log(`This ${product.name} price is $${product.price} but after the discount the price is $${product.discount(10)}`);