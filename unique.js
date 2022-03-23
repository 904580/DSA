
function countUnique(array) 
{
    if (array.length) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
    } 
    else 
    {
        throw new Error("Array is Empty yrr..pls check");
    }
}
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8,13]);
console.log(result);