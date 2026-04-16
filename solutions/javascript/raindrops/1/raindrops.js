
function isInteger(num){
  return parseInt(num) === num
}
export const convert = (num) => {
  let word = '';
  isInteger(num/3) ? word+= 'Pling' : null
  isInteger(num/5) ? word+= 'Plang' : null
  isInteger(num/7) ? word+= 'Plong' : null
  return word || num.toString()
};
