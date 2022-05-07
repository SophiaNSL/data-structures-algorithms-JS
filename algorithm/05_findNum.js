// 
function findNumber(arr, k) {
    // Write your code here
    let result = 'NO';
    for( let i = 0; i < arr.length; i++){
        if(arr[i] === k){ 
            return 'YES';
        }
    }
    return result;
}

const arr = [ 5894, 6968, 7004];
const k = 7004;

console.log(findNumber(arr, k));