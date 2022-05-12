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

//Binary Search

function binarySearch (arr, k) {
    let left = 0;
    let right = arr.length -1;
    let mid;

    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(arr[mid] == k){
            return 'YES';
        }else if (arr[mid] > k){
            right = mid -1;
        }else {
            left = mid +1;
        }
    }
    return 'NO';
}

const arr = [ 5894, 6968, 7004];
const k = 7004;

console.log(findNumber(arr, k));
console.log(binarySearch(arr,k));