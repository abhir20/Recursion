//recursive function to calculate the factorial of a given non negative number

const factorial = (n) => {
    if(n === 0)
    return 1;
    else{
        return n * factorial(n-1);
    }
}

const n = 1;
let f = factorial(n);
console.log(f);