export let chars = { 
  0 : [" _ | ||_|"],
  1 : ["     |  |"],
  2 : [" _  _||_ "],
  3 : [" _  _| _|"],
  4 : ["   |_|  |"],
  5 : [" _ |_  _|"],
  6 : [" _ |_ |_|"],
  7 : [" _   |  |"],
  8 : [" _ |_||_|"],
  9 : [" _ |_| _|"]
}
export const charConvert =(a) =>{
    return Object.keys(chars).find(key =>
        chars[key] == a) || '?';
}

export const convert = (a) => {
  let result = [];
  let columns = a.indexOf('\n')
  let lines = a.split(`${' '.repeat(columns > 3 ? columns : 4)}\n`);
  lines.forEach( line => {
    let rows = line.split('\n')
    let lineResult = ''
    for( let i = 0; i < rows[0].length; i = i + 3){
      lineResult += charConvert(rows[0].slice(i,i+3)  +rows[1].slice(i,i+3) + rows[2].slice(i,i+3))
    }
    result.push(lineResult)
  })
 return result.join()
};

