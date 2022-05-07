// Merging SORTED Arrays

// solution 1: using the built-in sort() method

const mergingSort = (arr1, arr2) => {
    const result = [...arr1, ...arr2];
    return result.sort((a,b)=> a-b)
}

const arr1 = [1,2,3];
const arr2 = [3,9];
console.log(mergingSort(arr1, arr2));

// solution 2: 
const mergingSort2 = (arr1,arr2)=>{
    let count = 0;
    let index1 = 0;
    let index2 = 0;
    const result = [];

    while(count < arr1.length + arr2.length){
        const isArr1Empty = index1 >= arr1.length;
        const isArr2Empty = index2 >= arr2.length;


        if(!isArr1Empty && (arr1[index1] < arr2[index2] || isArr2Empty) ){
            result[count] = arr1[index1];
            index1++;
        }else {
            result[count] = arr2[index2];
            index2++;
        }
        count++;
    }
    return result;

}

const arr3 = [1,2,3,4];
const arr4 = [5,6];

console.log(mergingSort2(arr3,arr4));