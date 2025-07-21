const user={
    name : "animesh",
    age : 23,
    height : 5.8
}
console.log(user["name"])

 

//Array Of Objects (Better Approach )
const userAll = [
    {
        name : "aimesh",
        age  : 23
    },{
        name  : "Priya",
        age : 20
    },{
        name : "Ramesh",
        age : 25
    }
] 

for(let i=0;i<userAll.length;i++){
    if(userAll[i]["age"]==23){
        console.log("He is Animesh Gandhi ")
    }
}
// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);