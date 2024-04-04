//Parametrized
//arr = [1,2,3,4,5,6] 
//sum of first N elements - N - 3

const sumOfFirstNnums = (array,N) => {
    //Base case
    let size = N-1;

    if(size === 0) {
        return array[size];
    }
    else {
        return array[size] + sumOfFirstNnums(array,size);
    }
}


let N = 3;
let array = [1,2,3,4,5,6]
let sum = sumOfFirstNnums(array,N);
console.log(sum);