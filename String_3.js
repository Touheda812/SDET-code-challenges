//Declare a new string variable with name coder and set value to 'I am a good programmer'
let coder = 'I am a good programmer';

//Find out the type of the variable coder
console.log(typeof(coder));

//Find out the length of the variable coder
console.log(coder.length);

//Convert to all uppercase
console.log(coder.toUpperCase());

//Convert to all lowercase
console.log(coder.toLowerCase());

//Find out if it includes the word ‘good’
console.log(coder.includes('good'));

//Strip out the word  ‘programmer’ from variable
console.log(coder.replace('programmer',''));

//Find out if variables ends with the word `programmer`
console.log(coder.endsWith('programmer'));

//Split the variable into two variable at `good` word 
console.log(coder.split('good'));
