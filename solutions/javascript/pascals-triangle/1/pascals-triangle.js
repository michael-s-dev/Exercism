//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
   let result = []
   for ( let i = 0; i < rows ; i++ ){
     if ( i === 0 ) result.push([1])
     else {
       let nextRow = [1]
       let lastRow = result.at(-1)
       for (let j = 0; j < lastRow.length - 1; j++){
         nextRow.push( lastRow[j] + lastRow[j+1])
       }
       nextRow.push(1)
       result.push(nextRow)
     }
   }
  return result
};
