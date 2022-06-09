class LinkList{
    constructor(value){
        this.head={
            value:value,
            next:null
        };
        this.tail = this.head;
        this.length =1;
    }
}
console.log("creatinga linklist at constant time o(1): 20:");
const myLinkList = new LinkList(20);
console.log(myLinkList);

printList()
    let printArrayList=[];
    let currentNode = this.head;
    while(currentNode!==null){
        printArrayList.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return printArrayList.join("->");

