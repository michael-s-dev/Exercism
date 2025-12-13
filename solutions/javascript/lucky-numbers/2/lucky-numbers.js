
export function twoSum(array1, array2) {
  return Number(array1.join('')) +  Number(array2.join(''))
}

export function luckyNumber(value) {
   let valueArr = value.toString().split('')
   return valueArr.join('') === valueArr.reverse().join('')
}

export function errorMessage(input) {
  if (!input) return 'Required field'
  if( isNaN(input) || input == 0 ) return 'Must be a number besides 0'
  else return ''
}
