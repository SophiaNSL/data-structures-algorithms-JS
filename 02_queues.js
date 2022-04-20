//Queues
//print enqueue dequeue front size isEmpty
class Queue {
   
   constructor() {
    this.collection = [];
   }

   print () {
       console.log(this.collection);
   }

   enqueue (element) {
    this.collection.push(element);
   }

   dequeue () {
       return this.collection.shift();
   }

   front () {
       return this.collection[0];
   }

   size () {
       return this.collection.length;
   }

   isEmpty () {
       return (this.collection.length === 0);
   }

}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
console.log(queue.dequeue());
console.log(queue.front());
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());

