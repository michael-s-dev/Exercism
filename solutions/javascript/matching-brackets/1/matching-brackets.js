export const isPaired = ( string ) => {
  const map = { 
    '}' : { pair : '{' } ,
    ']' : { pair : '[' } ,
    ')' : { pair : '(' } 
  }

  let openedBrackets = [];

  
  for (let char of string) {
    if( map[char]) { 
      if ( openedBrackets.pop() !== map[char].pair) return false
    }
    else if( char.match(/[\{\[\(]/) ) {
      openedBrackets.push(char)
    }
  }
  return !openedBrackets.length
};
