

class Node{
    constructor(val){
        this.val=val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.tail = null;
        this.head = null;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    pop(){
        let current = this.head;
        let newTail = current;
        if(!this.head) return undefined;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length --;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let shifted = this.head;
        this.head = shifted.next;
        this.length --;
        if(this.length === 0){
            this.tail = null;
        }
        return shifted;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
    get(val){
        if(val<0 || val > this.length){
            return null
        }
        let counter = 0;
        let current = this.head;
        while(counter!==val){
            current = current.next;
            // console.log(current)
            counter++;
            // console.log(counter)
        }
        return current
    }
    set(index, newVal){
        let original = this.get(index)
        if(original){
            original.val = newVal;
            return true;
        }
        return false;
    }
    insert(index, value){
        let newNode = new Node(value)
        if (index<0 || index > this.length){
            return false;
        }
        if(index == 0){
            return this.unshift(value);
        }
        if(index === this.length){
            return this.push(value);
        }

        const prev = this.get(index-1);
        const repl = prev.next;
        prev.next = newNode;
        newNode.next = repl;
        this.length++;
        return true; 
    }
    remove(index){
        if (index<0 || index>=this.length){
            return undefined
        }
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();

        const prev = this.get(index-1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for(let i=0; i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log(this)
        return this;
    }
}
var list = new SinglyLinkedList();
list.push(10)
list.push(22)
list.push(15)
list.unshift("hello")
list.reverse();
// console.log(list)
// console.log(list.head.next.next)
// list.remove(2)
// console.log('---------------')
// console.log(list)
// console.log(list.head.next)