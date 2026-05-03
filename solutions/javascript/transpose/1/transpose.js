
export const transpose = (input) => {
  let output = []
  if (input.length === 0) return output
  if (input.length === 1) return input[0].split('')
  let longestString = input.reduce( (acc,string) => Math.max( acc , string.length ) , 0)
  
  for (let i = 0; i < longestString; i++) {
    let line = ''
    let lastCharIndex = 0
    for (let j = 0; j < input.length; j++) {
        line += input[j][i] || ' '
        if( input[j][i] )  lastCharIndex = j  
      } 
    output.push(line.slice(0,lastCharIndex+1))
  }
  return output
};