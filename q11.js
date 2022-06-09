//linear search implementation...

//time compexity---O(n)


const users=[{
    name:"bob",
    class: "MCA",
    occupation:"pendding",
    
},
{
    name:"foo",
    class: "MCA",
    occupation:"pendding"
},
{
name:"john",
    class: "MCA",
    occupation:"pendding"
},
]

function Exitusers(array,val){
    for(let item of array){
    if(item['name']===val){
        return true;
    }
    }
    return false;
}

const result = Exitusers(users, "foo");
console.log(result);