const maxCharInStr = (str) => {

    const obj = {};
    for( let char of str){
        obj[char] = obj[char] + 1 || 1;
    }
    
    let max = 0;
    let maxChar;

    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            maxChar = key;
        }
    }
    return maxChar;
}

const testCase1 = 'hello world';
const testCase2 = 'aaacbbbsccfrgccc';

console.log(maxCharInStr(testCase1));
console.log(maxCharInStr(testCase2));