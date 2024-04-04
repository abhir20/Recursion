//1. print name n times

//General way is to use loop

//Using recursion
//Time complexity O(N)
//from 1-4
const printName = (name,i,n) =>
{
    if(i > n){
        return;
    }
    console.log(name);
    printName(name,i+1,n);
}

//Backwards
const print = (name,i,n) =>{
    if(i < 1){
        return;
    }
    console.log(name);
    print(name,i-1,n);
}


const name = "Aarna";
const n = 0;
let i = 5;
//printName(name,i,n);
print(name,i,n);