// LeetCode 20. Valid Parentheses
const isValid = (str) => {

    let stack = new Stack();

    for(let char of str) {
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);          
        }else if ( !stack.isEmpty() && char === ')' && stack.peek() === '('){
            stack.pop();         
        }else if (!stack.isEmpty() && char === ']' && stack.peek() === '['){
            stack.pop();
        }else if (!stack.isEmpty() && char === '}' && stack.peek() === '{'){
            stack.pop();
        }else {
            return false;
        }
    }

    return stack.isEmpty();
}

class Stack {
    constructor(){
        this.storage = {};
        this.counter = 0;
    }

    push(val){
        this.storage[this.counter] = val;
        this.counter++;
    }

    pop() {
        if (this.counter === 0) {
          return undefined;
        }
    
        this.counter--;
        let result = this.storage[this.counter];
        delete this.storage[this.counter];
        return result;
      }

      peek() {
        let result = this.storage[this.counter - 1];
        return result;
      }

    isEmpty(){
        return this.counter === 0;
    }

}

const str = '({}{})[]';
console.log(isValid(str));

