export const saddlePoints = (matrix) => {

  let results = []
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []

  let candidates = []

  matrix.forEach( (row,i) => {
    const highestValue = Math.max(...row)
    row.forEach( (number,index) => {
      if( highestValue == number ) {
        candidates.push( { value : number , row : i, column : index })
      }
    })
  })
    
  candidates.forEach( (candidate) => {
     let lowest = true
     for( let i = 0; i < matrix.length; i++){
        if (matrix[i][candidate.column] < candidate.value) {
          lowest = false
          break
        }    
     }
    if ( lowest ) results.push( { row:candidate.row+1 ,column:candidate.column+1 } )
  })

  return results
  
};
