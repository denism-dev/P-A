class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const temp = this.head;
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }

    display() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.data}`;
            if (current.next !== null) {
                result += ', ';
            }
            current = current.next;
        }
        return result;
    }
}

// Examples
const SLL1 = new SLL();
console.log(SLL1.addFront(76)); // Node { data: 76, next: null }
console.log(SLL1.addFront(2)); // Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()); // "2, 76"
console.log(SLL1.addFront(11.41)); // Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1.display()); // "11.41, 2, 76"
