const addTwoNumbers = (l1,l2) => {
    
    let carry = 0;
    let previousNode = new ListNode();
    let headNode = previousNode;
    while(l1 || l2 || carry){
        let value1 = 0;
        let value2 = 0;
        if(l1){
            value1 = l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            value2 = l2.val;
            l2 = l2.next;
        }
        
        let sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        const newNode = new ListNode(digit);
        previousNode.next = newNode;
        previousNode = newNode;
    }
    return headNode.next;
}