import LinkedList from "./linkedList.js";
import Node from "./node.js";


let newNode = new Node(1);
let newList = new LinkedList();

newList.prepend(23);
newList.prepend(3);
newList.prepend(4);
newList.insertAt(0, 2)

newList.removeAt(0);

console.log(newList.toString());

