function truthCheck(collection, pre) {
  let count = 0;
  for(let i = 0; i < collection.length; i++){
    if(collection[i][pre]){
      count++;
    }
  }
  if(count === collection.length){
    return true;
  }else{
    return false;
  }
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], "sex"); // return true
