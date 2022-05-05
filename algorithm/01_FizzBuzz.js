//FizzBuzz
// 3, fizz, 5 buzz, 3 & 5 fizzbuzz

const fizzBuzz = (num) => {

    const result = [];
    for( let i = 1; i <= num; i++){
        if(  i % 3 === 0 && i % 5 === 0){
            result.push('fizzBuzz');
        }else if ( i % 5 === 0){
            result.push('buzz');
        }else if ( i % 3 === 0 ){
            result.push('fizz');
        }else {
            result.push(i);
        }
    }
    return result;

}
console.log(fizzBuzz(15));