import Node from "./node.js";

export default class LinkedList {
    constructor(node = null) {
        this.head = node;
        this.tail = node;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = this.tail.nextNode;
        }
    }

    prepend(value) {
        if (this.tail == null) {
            let newNode = new Node(value);
            this.tail = newNode;
            this.head = newNode;
        } else {
            let newNode = new Node(value, this.head);
            this.head = newNode;
        }
    }

    size() {
        if (this.head == null) return 0;
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    at(index) {
        if (this.size() <= index || index < 0) return null;
        let result = this.head;
        for (let i=0; i<index; i++) {
            result = result.nextNode;
        }
        return result;
    }

    pop() {
        if (this.head == null) return false;
        if (this.size() == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let current = this.head;
            for (let i=1; i<this.size() - 1; i++) {
                current = current.nextNode;
            }
            current.nextNode = null;
        }   
    }

    contains(value) {
        if (this.head == null) return false;
        let current = this.head;
        while (current != null) {
            if (current.value == value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        if (this.head == null) return null;
        let index = 0;
        let current = this.head;
        while (current != null) {
            if (current.value == value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        if (this.head == null) return null;
        let current = this.head;
        while (current != null) {
            process.stdout.write(`( ${current.value} ) -> `); // print to screen without newline
            current = current.nextNode;
        }
        console.log(null);
    }

    insertAt(value, index) { // doğru çalışıyor
        if (index == 0) {this.prepend(value); return;}
        if (index == this.size()) {this.append(value); return;}
        if (index > this.size()) return false;
        let prev = this.at(index-1);
        prev.nextNode = new Node(value, prev.nextNode);
    }

    removeAt(index) {
        if (this.head == null) return false;
        if (index > this.size()) return false;
        if (index == 0) {
            this.head = this.head.nextNode;
            return;
        }
        let prev = this.at(index-1);
        prev.nextNode = prev.nextNode.nextNode;
        
    }

}
