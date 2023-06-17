// Build a Calculator 

class Calculator{
    add(a,b){
        return a+b; 
    }
    substract(a,b){
        return a-b; 
    }
    multiply(a,b){
        return a*b;
    }
    divide(a,b){
        return a/b; 
    }
}

let calculate_1 = new Calculator();

console.log(calculate_1.add(3,5));
console.log(calculate_1.substract(3,5));
console.log(calculate_1.divide(3,5));
console.log(calculate_1.multiply(3,5));