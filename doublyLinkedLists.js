class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value){
        let node = new Node(value);
        if (!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let temp = this.tail;
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length --;
        return temp;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        if(this.length === 2){
            this.head = null;
            this.tail = null;
        }
        else{
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
        }
        this.length --;
        return temp;
    }
    unshift(value){
        let newHead = new Node(value);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        }
        else{
            let oldhead = this.head;
            oldhead.prev = newHead;
            newHead.next = oldhead;
            this.head = newhead;
        }
        this.length++
        return this;
    }
    get(number){
        //start at the closer side; this is for the end
        if(number < 0 || number > this.length){
            return 0;
        }        
        if (number <= this.length /2 ){
            let counter = 0;
            let current = this.head;
            while(counter !== number){
                current = current.next;
                counter++;
            }
        }
        else{
            let counter = this.length -1;
            let current = this.tail;
            while(counter!== number){
                current = current.prev;
                counter--;
            }
            }
            return current
        }
    set(index, value){
        let gotten = this.get(index)
        if(gotten != null){
            gotten.val = value;
            return true;
        }
        return false;
    }
    insert(index, value){
        let newVal = new Node(value);
        let gotten = this.get(index-1)
        if(index > this.length || index<0){
            return false
        }
        if(index === 0){
            return this.unshift(value)
        }
        if(index===this.length){
            return this.push(value)
        }
        if(gotten != null){
            gotten.next.prev = newVal;
            newVal.next = gotten.next;
            gotten.next = newVal;
            newVal.prev = gotten;
        }
        this.length ++;
        return true;
    }
    remove(index){
        if(index > this.length || index<0){
            return undefined
        }
        if(index===0) return this.shift();
        if(index=== this.length-1) return this.pop();
        let prev = this.get(index-1);
        let post = this.get(index+1)
        let removed = this.get(index)
        if(removed){
            post.prev = prev;
            prev.next = post;
            removed.prev = null;
            removed.post = null;
        }
        this.length --;
        return removed;
    }
    reverse(){
        
    }
    }


let list = new DoublyLinkedList()
list.push(2)
list.push(4)
list.push(12)
console.log(list)
list.shift();
console.log(list)