// LeetCode 1. Two Sum

const twoSum = (arr, target) => {
    let difIndex = new Map();
    let result = [];

    for( let i = 0; i < arr.length; i++){
        let dif = target - arr[i];
        if(difIndex.has(arr[i])){

            result[0] = difIndex.get(arr[i]);
            result[1] = i;

        }else{
            difIndex.set(dif, i);
        }
    }
    return result;
}

const arr = [2,7,11,15];
const target = 9;

console.log(twoSum(arr, target));