
let counter=1;
function demo(number){
    if(counter > number){
        return;
    }
    console.log("DSA preparation..." +counter);
    counter++;
    demo(number)
}

demo(23);