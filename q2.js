function Node(data, next) {
    this.data = data;
    this.next = next;
}

var n1 = new Node("Hello", null);
var n2 = new Node("21", n1);
var n3 = new Node("Green", n2);
var n4 = new Node("Blue", n3);
var n5 = new Node("Daniel", n4);
var head = n5;

var fastPointer = head;
var slowPointer = head;

while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
}
slowPointer.data
let res = Node(("green", n2));
console.log(res);
