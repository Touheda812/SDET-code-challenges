// Write a function that takes an array of objects representing books and returns an array containing the titles of those books.
console.log('Array containing the titles of books');
let getBookTitles = function (books) {
    return books.map((book) => book.title);
};

let books = [
    {
        book: 'Here I am',
        title: 'Amanda'
    },
    {
        book: 'Python',
        title: 'Amara'
    },
    {
        book: 'Look for it',
        title: 'Hiw'
    }
];

let bookTitles = getBookTitles(books);
console.log(bookTitles);

// Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.
console.log('\nArray containing only the products that are currently in stock')
function getInStockProducts(products) {
    return products.filter((product) => product.stock !== 0);
}

let products = [
    {
        product: 'toy1',
        stock: 5
    },
    {
        product: 'phone',
        stock: 0
    },
    {
        product: 'pen',
        stock: 0
    },
    {
        product: 'pen',
        stock: 12
    }
];

let inStockProducts = getInStockProducts(products);
console.log(inStockProducts);

// Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.
console.log('\nthe first user whose email address matches a given email')
let findUserByEmail = (users, email) => {
    return users.find((user) => user.email === email);
};

let users = [
    {
        user: 'Tamia',
        email: 'tamiaj@gmail.com'
    },
    {
        user: 'Taatia',
        email: 'taatiak@gmail.com'
    },
    {
        user: 'Aron',
        email: 'aronl@gmail.com'
    },
    {
        user: 'Tamia Johnson',
        email: 'tamiaj@gmail.com'
    }
];

let foundUser = findUserByEmail(users, 'tamiaj@gmail.com');
console.log(foundUser);

// Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.
console.log('\ntrue if all the tasks are marked as complete, otherwise returns false');
function areAllTasksComplete(tasks) {
    return tasks.every(task => task.complete);
};
let tasks1 = [
    {
        task: 'dishwasing',
        complete: true
    },
    {
        task: 'dusting',
        complete: true
    },
    {
        task: 'cooking',
        complete: false
    }
];
console.log(areAllTasksComplete(tasks1));


// Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.
console.log('\nthe total amount spent on those purchases');
function purchaseTotal(purchases) {
    let totalAmount = 0;
    purchases.forEach((purchase) => {
        totalAmount += purchase.purchase1;
    });

    return totalAmount
}
let purchases1 = [
    {
        purchase1: 90,
    },
    {
        purchase1: 78,
    },
    {
        purchase1: 40,
    }
];
console.log(purchaseTotal(purchases1));

// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
console.log('\nthe sum of all the numbers in the array');
function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
}
const numbers = [1, 22, 43, 40, 5];
const result = sumArray(numbers);
console.log(result);

// Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.
console.log('\na new array with all the strings converted to uppercase');
function convertToUpperCase(strings) {
    return strings.map(sName => sName.toUpperCase());
}

let strings = ['Chris', 'Nancy', 'Joe', 'Rebecca', 'Touheda'];
let newStringsUppercase = convertToUpperCase(strings);
console.log(newStringsUppercase);


// Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.
console.log('\na new array with all the even numbers from the original array');
function getEvenNumbers(numbers1) {
    return numbers1.filter(num1 => num1 % 2 === 0);
}
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = getEvenNumbers(numbers1);
console.log(result1); 


// Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.
console.log('\na new array with all the strings that have a length of 4 or less');

function stringLengthOf4(strings_1){
    return strings_1.filter(str => str.length <= 4)
}

let strings_1 = ['Chris', 'Piya', 'Nancy', 'Joe', 'Rebecca', 'Touheda', 'Chol'];
let newString_1 = stringLengthOf4(strings_1);
console.log(newString_1);
