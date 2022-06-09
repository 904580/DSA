//reverse stack

function reverseStack(inputStack){
    let helperStack1 = [];
    let helperStack2 = [];
     
    while(inputStack.length > 0){
    helperStack1.push(inputStack[inputStack.length-1]);
    inputStack.pop();
    }
     
    while(helperStack1.length > 0){
    helperStack2.push(helperStack1[helperStack1.length-1]);
    helperStack1.pop();
    }
     
    while(helperStack2.length > 0){
    inputStack.push(helperStack2[helperStack2.length-1]);
    helperStack2.pop();
    }
     
    for(let i=0;i<inputStack.length;i++){
    console.log(inputStack[i]);
    }
    }
     
    
    let is = [];
    is.push(1);
    is.push(2);
    is.push(3);
    is.push(4);
    is.push(5);
    is.push(6);
    reverseStack(is);