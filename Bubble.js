//bubble sort--

// a sorting algorithem where the  largest values bubble up at the top-----

function bubbleSort(array){
    for(let i= array.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    return array;
}
const result = bubbleSort([5,3,4,2,8,6,7,0,1]);
console.log(result);

//time complexity-o(logn^2)