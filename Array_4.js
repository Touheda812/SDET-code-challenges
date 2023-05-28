// Create an array of student names (Add at least 5 names)
let studentNames = ['Touheda', 'Roe', 'John', 'Kate', 'Zain']; 

// Find the length of an array
console.log(`The length of the array -> ${studentNames.length}`);

// Demonstrate the usage of array manipulation on students array by showing example of pop, push, shift, unshift, splice functions
console.log(studentNames);
console.log(`pop -> ${studentNames.pop()}`);
console.log(studentNames);
console.log(`push -> ${studentNames.push('Khanom')}`);
console.log(studentNames);
console.log(`shift -> ${studentNames.shift()}`);
console.log(studentNames);
console.log(`unshift -> ${studentNames.unshift('Hall')}`);
console.log(studentNames);
console.log(`splice -> ${studentNames.splice(2, 1)}`);
console.log(studentNames);

// Find out if array includes the value ‘John’
console.log(`Array includes 'John'? -> ${studentNames.includes()}`);

// Find index of student ‘Kate’
console.log(studentNames);
console.log(`Index of student Kate -> ${studentNames.indexOf('Kate')}`);

// Reverse your array and print last Index value
console.log(studentNames);  // [ 'Hall', 'Roe', 'Kate', 'Khanom' ]
console.log(`Reverse array -> ${studentNames.reverse()}`);   // Reverse array -> Khanom,Kate,Roe,Hall
let lastIndexValue = studentNames.length - 1; 
console.log(`Last Index Value -> ${studentNames[lastIndexValue]}`);

// Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )
let equalTo = studentNames[0] === studentNames[lastIndexValue]; 
console.log(equalTo);