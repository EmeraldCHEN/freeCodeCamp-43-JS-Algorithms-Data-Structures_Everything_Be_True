function truthCheck(collection, pre) {
  let counter = 0; // Create a counter to count how many are true
  for(let i = 0; i < collection.length; i++){
    if(collection[i][pre]){
      counter++;
    }
  }
  if(counter === collection.length){
    return true;
  }else{
    return false;
  }
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], "sex"); // return true
