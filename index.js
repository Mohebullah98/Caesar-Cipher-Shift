/*
All we have to do is convert each character to it's ascii value 
and then increase it's value by the shift.
Once we've shifted the char we convert the ascii code back to a char.
*/
function caesarCipher(phrase,shift){
  let result="";
  for(let i=0;i<phrase.length;i++){
    //check to see if char is a letter, if not then don't shift char.
    if (phrase.charAt(i).toLowerCase()===phrase.charAt(i).toUpperCase()){
      result+=phrase.charAt(i);
      continue;
    }
    let currentChar = phrase.charCodeAt(i);
    currentChar+=shift;
    result+= String.fromCharCode(currentChar);
  }
  return result;
}

console.log(caesarCipher("Caesar Cipher",2));
