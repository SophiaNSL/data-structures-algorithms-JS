//example 1
const compose = (a, b, c) => (data) => a(b(c(data)));

const multBy3 = (num) => {
    return num *3;
}
const multBy4 = (num) => {
    return num *4;
}
const multBy5 = (num) => {
    return num *5;
}

const getNum = compose(multBy3, multBy4, multBy5);
console.log(getNum(1));




// example 2 Max character 
const compose2 = (a, b) => (data) => a(b(data));
const stringToObj = (str) => {

    const obj ={};
    for(let char of str){
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}

const getMax = (obj) =>{
    let max = 0;
    let result;

    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            result = key;
        }
    }
    return result;
}


const str = 'hello sophia';
const getMaxCompose = compose2(getMax, stringToObj);
console.log(getMaxCompose(str));