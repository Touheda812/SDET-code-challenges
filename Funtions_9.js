//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log(calculateSum(numberArray));
  
// Write a function that takes in a string and returns the string reversed.
function stringName(string) {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}
let stringN = 'Touheda Khanom';
console.log(stringName(stringN));

// Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.
function objectArray(adultName){

    for(i = 0; i < adultName.length; i++){
        let adultAge = adultName[i].age; 
        if (adultAge >18){
            console.log(adultName[i]); 
        }
    }   
}

let people = [
    {
        name: 'Touheda',
        age: 22,
        gender: 'Female'
    },
    {
        name: 'Raima',
        age: 18,
        gender: 'Female'
    },
    {
        name: 'John',
        age: 10,
        gender: 'Male'
    }
]; 
objectArray(people);

// Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

function arrayOfNumbers(number){
    
    for(let i=0; i < number.length; i++){
        if(number[i] % 2 == 0){
            console.log(number[i]);
        }
    }
}
let numbers = [1,2,3,4,45,6,5,7,9,8];
arrayOfNumbers(numbers); 

//Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

function arrayOfStings(strings) {
    let newStrings = [];
    for(i = 0; i < strings.length; i++){
        if(strings[i].startsWith('A')){
            let result = newStrings.push(strings[i])
        }
    }
    return newStrings; 
}

let strings_names = ['Touheda', 'Maria', 'Adam', 'Ariana', 'Amber'];
console.log(arrayOfStings(strings_names));

/* Write a function that takes in an array of objects representing books, 
where each object has properties for title, author, and published, and returns 
an array of strings representing the titles of all the books published in the 
year 2000 or later.
*/

function arrayOfObjects(books) {
    let titlesOfBooks = []; 
    for(i = 0; i < books.length; i++){
        if(books[i].published >= 2000){
            titlesOfBooks.push(books[i].title)
        }
    }
    return titlesOfBooks; 
}
let books = [
    {
        title: 'Book1',
        author: 'Write1',
        published: 1987
    },
    {
        title: 'Book2',
        author: 'Write2',
        published: 2000
    },
    {
        title: 'Book3',
        author: 'Write3',
        published: 2022
    }
]
console.log(arrayOfObjects(books));

//Write a function that takes in two numbers and returns the larger of the two.
function twoNumbers(num1, num2){
    if(num1 > num2 ){
        return num1;
    }
    else {
        return num2;
    }
}; 

let a = 20;
let b = 40;
console.log(`The Largest number is -> ${twoNumbers(a,b)}`);

// Write a function that takes in an array of numbers and returns the smallest number in the array.
function two_Numbers(num_1, num_2){
    if(num_1 > num_2 ){
        return num_2;
    }
    else {
        return num_1;
    }
}; 
let a1 = 10;
let b1 = 40;
console.log(`The smallest number is -> ${two_Numbers(a1,b1)}`);

//Write a function that takes in an array of strings and returns the longest string in the array.

function arrayofString1(longestStringArray) {
    let longestString = longestStringArray[0]; 
    for(i=0; i< longestStringArray.length; i++){
        if(longestStringArray[i].length > longestString.length){
            longestString = longestStringArray[i]; 
        }
    }
    return longestString; 
}

let stringLong = ['this is myra', 'this is the bag of myra', 'myra is going to college'];
console.log(arrayofString1(stringLong));


// Write a function that takes in an array of objects representing students, where each object has properties for name and grade, and returns an array of objects representing only the students who have a grade of "A".

function arrayOfObject(students){
    let studentGotA = []; 
    for(i = 0; i< students.length; i++){
        if(students[i].grade === 'A'){
            studentGotA.push(students[i]); 
        }
    }
    return studentGotA; 
}
let students = [
    {
        name: 'Touheda',
        grade: 'A'
    },
    {
        name: 'Tamia',
        grade: 'B'
    },
    {
        name: 'Roe',
        grade: 'A'
    }
]
console.log(arrayOfObject(students));