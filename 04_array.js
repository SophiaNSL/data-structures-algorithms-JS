//code out array from scratch
class TestArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    get(index){
        return this.data[index];
    }

    delete(index){
        const item = this.data[index];
        delete this.data[index];
        this.shiftIndext(index);
    }

    shiftIndext(index){
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;

    }
}

const arr = new TestArray();
arr.push('first element');
arr.push('second element');
arr.push('last element');
arr.delete(2);
console.log(arr.get(10));