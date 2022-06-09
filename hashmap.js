// it is a ds,
//used for searching, insertion,deletion
//time complexity-- o(n)//less
//data stored in key value pair..

let m = new Map()
// console.log(m);

//add values to you hashmap

m.set(10,100);
m.set(23, "apple");
m.set(6, 908);
m.set(12.3, 6700);
m.set(1,90.0);
//console.log(m);
 //console.log(m.get(1));
//  for(let item of m){
//  console.log(item[0])
//  }


 //delete a key

 m.delete(23);
 console.log(m);

 //delete all data in map

//  m.clear();
//  console.log(m);