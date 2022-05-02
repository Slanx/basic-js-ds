const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.linkedList = null;
    }

    getUnderlyingList() {
        return this.linkedList;
    }

    enqueue(value) {
        const node = new ListNode(value);
        if (!this.linkedList) {
            this.linkedList = node;
        } else {
            let prev = null;
            let current = this.linkedList;

            while (current) {
                prev = current;
                current = current.next;
            }
            prev.next = node;
        }
    }

    dequeue() {
        const value = this.linkedList.value;
        this.linkedList = this.linkedList.next;
        return value;
    }
}

module.exports = {
    Queue,
};
