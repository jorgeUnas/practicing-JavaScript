// anatomy of a JSON element 


// convert json into a JS object to extract data

const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

const jsObject = JSON.parse(jsonData);

console.log(jsObject.parent.children);
console.log(jsObject);