//time compexity---O(n)


const users=[{
    name:"anoop",
    class: "MCA",
    girlfriend:"pendding",
    
},
{
    name:"Himanshu",
    class: "MCA",
    girlfriend:"pendding"
},
{
name:"partho",
    class: "MCA",
    girlfriend:"pendding"
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

const result = Exitusers(users, "partho");
console.log(result);