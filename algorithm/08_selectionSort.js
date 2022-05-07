const selectionSort = (arr) => {
    let temp;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]>arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

const arr = [1,3,1,2,6,4,9,6,1,4,0];
console.log(selectionSort(arr));