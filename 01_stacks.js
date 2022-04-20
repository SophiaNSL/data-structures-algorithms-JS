// functions: push, pop, peek, length
let letters = [];//this is the stack
let word = 'racecar';
let rword = '';
//put letters of word into stack
for (let i = 0; i <word.length; i++){
    letters.push(word[i]);

}
//pop off the stack in reverse order
for (let i = 0; i <word.length; i++){
    rword += letters.pop()
}

if(word === rword){
    console.log( word + ' is a palindrome');
}else {
    console.log( word + ' is not a palindrome');
}

//Create a stack
class Stack{
    constructor(){
        this.count = 0;
        this.storage = {};
    }
    //Add a value to the end of the stack
    push (value) {
        this.storage[this.count] = value;
        this.count++;
    }
   //Removes and returns the value at the end of the stack
   pop () {
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
   }

   size() {
    return this.count;
   }

   //Returns the value at the end of the stack
    peek() {
       return this.storage[this.count-1];
   }

}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('sophia');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


