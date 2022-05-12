//solution 1 iterative solution

const fibIt = (num) => {
    const arr = [0, 1];
    const obj = {};
    let counter = 0;
    for (let i = 2; i <= num; i++){
        let a = arr[i-2];
        let b = arr[i-1];

        arr.push(a + b);
    }

    for (let item in arr){
        obj[counter] = arr[item];
        counter++;
    }

    return obj;
}

console.log(fibIt(10));

// solution 2 recursive solution

const fibRec = (n) => {
    if (n < 2) {
        return n;
    }
    return fibRec(n-2) + fibRec(n-1);
}

console.log(fibRec(9));

// factorial

const factorial = (n) => {
    if(n < 2){
        return 1;
    }
    return n * factorial(n-1);

}
console.log(factorial(3));