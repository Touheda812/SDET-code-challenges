// 1. Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays
function Arrays(array1, array2){
    const array_1_2 = [...array1, ...array2];
    return (array_1_2); 
}
const printArryas = Arrays([1,2,3],[4,5,6]);
console.log(printArryas);

// 2. Write a function that takes in an array of strings and a string to add to the beginning of the array, and returns a new array with the string added to the beginning.
function stringArray(string, originalArray){
    const updateString = [string, ...originalArray]
    return (updateString);
}   
const printStringArray = stringArray('mango', ['apple', 'banana', 'cherry']); 
console.log(printStringArray);

// 3. Write a function that takes in an object and a key-value pair to add to the object, and returns a new object with the key-value pair added.
function object(originalO){
    const NewO = {...originalO, occupation:'Engineer'};
    return NewO; 
}
console.log(object({name:'John', age: 30}));

// 4. Write a function that takes in an array of numbers and returns the largest number in the array.
function numberArray(numbers){
    let highestNumber = numbers[0]; 
for(let i=0; i<numbers.length; i++){
    if(numbers[i]> highestNumber){
        highestNumber = numbers[i]; 
    }
}
return highestNumber; 
}
const originalArray = [4,8,1,6,9,2]; 
console.log(`Highest Number: ${numberArray(originalArray)}`); 

// 5. Write a function that takes in an array of strings and returns a new array containing all the strings in alphabetical order.
function stringArray_1(string_1){
    let sortString = string_1.sort(); 
    return sortString; 
}
const originalArray_1 = ['banana', 'apple', 'cherry'];
console.log(stringArray_1(originalArray_1));