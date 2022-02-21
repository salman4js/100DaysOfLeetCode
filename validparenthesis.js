const isValid = (str) => {
  const pairs = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }
  if(str.length === 1){
      return false;
  }
  const stack = [];
  for (let ch of str){
    if(pairs[ch]){
      stack.push(pairs[ch])
    } else  if(stack.length > 0 && stack[stack.length -1] === ch){
      stack.pop()
    } else {
      return false;
    }
  }
  return true;
}

console.log(isValid("(("));
