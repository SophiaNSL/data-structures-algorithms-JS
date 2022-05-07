//Bubble sort - numbers bubble up to the top (end) of the array
// slow time complexity - O(n^2)

const bubbleSort = (arr) => {
    let temp;
    for(let i = arr.length; i > 0; i-- ){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [1,2,8,4,7,6,9,0,3,4,2,1];
console.log(bubbleSort(arr));