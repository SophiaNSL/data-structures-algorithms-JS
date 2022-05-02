//Node class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// const node = new Node(1);
// console.log(node);

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    print(){
        const result = [];
        let counter = 0;
        let current = this.head;
        while(counter < this.length){
            result.push(current.data);
            current = current.next;
            counter++;
        }
        return result;
    }

    append(data){

        if(!this.head){
            this.prepend(data);
        }else {
            const node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        return this;
    }

    prepend(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length ++;
        }else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
        return this;

    }

    insert(index, data){
        if(index < 0 || index > this.length){
            return -1;
        }else if (index === 0){
            this.prepend(data);
        }else if (index === this.length){
            this.append(data);
        }else {
            const newNode = new Node(data);
            let current = this.head;
            let counter = 0;

            while(counter < index -1){
                counter++;
                current = current.next;
            }

            let temp = current.next;
            current.next = newNode;
            newNode.next = temp;
            this.length++;
        }
        return this;
    }

    removeHead(){
        this.head = this.head.next;
        this.length--;
    }

    removeTail(){
        let current = this.head;
        let counter = 0;

        while(counter < this.length -1){
            current = current.next;
            counter ++;
        }
        current.next = null;
        this.tail = current;
        this.length--;
    }

    delete(index){
        if(index < 0 || index > this.length){
            return -1;
        }else if(index === 0){
            this.removeHead();
        }else if(index === this.length){
            this.removeTail();
        }else {
            let current = this.head;
            let counter = 0;
            while(counter < index -1){
                current = current.next;
                counter ++;
            }
            current.next = current.next.next;
            this.length--;
        }
    }

    reverse(){
        if(!this.head){
            return -1;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    getProps(){
        return `Length: ${this.length} || Head: ${this.head.data} || Tail: ${this.tail.data}`
    }

}

const list = new LinkedList();
// list.prepend('first node');
// list.prepend('new node');
// list.prepend('final node');
// list.append('new test tail');
// list.append('Final tail');

// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.append(list.length);
// list.insert(5,'This will be inserted at index 5');
// list.insert(9,'insert tail');
// list.insert(0,'insert head');
// list.delete(0);
// list.delete(9);
// list.delete(5);
// list.reverse();

// console.log(list.print());

list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
list.append(list.length);
console.log(list.print());
list.reverse();
// console.log(list);
console.log(list.print());