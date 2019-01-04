/**************  Solution #1   ************************************************************************************/

function truthCheck(collection, pre) {
  let counter = 0; // Create a counter to count how many are true
  for(let i = 0; i < collection.length; i++){
    if(collection[i][pre]){ // Access object properties through [] notation
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


/**************  Solution #2   ************************************************************************************/

function truthCheck2(collection, pre) {
  let counter = 0;
  for(let obj in collection){ // Loop through indices of the passed array
  // If it is has property and value is truthy
    if(collection[obj].hasOwnProperty(pre) && Boolean(collection[obj][pre])){
      counter++;
    }
  }
  // Outside the loop, check to see if all of them are true and return true or false
  return counter === collection.length;
}








