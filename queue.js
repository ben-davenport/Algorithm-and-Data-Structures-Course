//you can create a queue with an array
//first thing added in (enq)
//first thing removed (ddq)

const q = [];
q.push(1)
q.push(2)
q.push(3)
q.shift();
q.shift();
q.shift();

// ... 
//but removing from the beginning is not optimal for the array, everything has to be re-indexed;
q.unshift(1);
q.unshift(2);
q.unshift(3);
q.pop()
q.pop()
q.pop()
//you can instead unshift for adding everything and then pop. but you have the same problem.
//so basically you should be making your own class.


//create your own class
//like a singly linked list, removing from the very end is slow
//so since you want FIFO; add to the end and remove from the beginning
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return newNode.val;
    }
    dequeue(){
        if(!this.first) return null;
        const popped = this.first;
        if(this.first === this.last){
            this.last = null
            }
        this.first = this.first.next
        this.size --;
        return popped.value
    }
} 