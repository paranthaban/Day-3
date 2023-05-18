const obj1 = {
    "name": "Person 1",
    "age": 5,
  };
  
  const obj2 = {
    "age": 5,
    "name": "Person 1"
  };
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.every(key => keys2.includes(key))) {
    console.log("The objects have the same properties");
  } else {
    console.log("The objects do not have the same properties");
  }
  