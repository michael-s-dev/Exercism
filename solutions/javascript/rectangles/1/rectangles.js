//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count( input ) {
   let count = 0
   if (  !input.length  || !input[0].trim().length ) return count

  input.forEach( (row,indx) => {
     for ( let i = 0; i < row.length; i++){
     if ( row[i] !== '+') continue
     let leftCornerPos = i
     for( let j = leftCornerPos+1; j < row.length; j++){
      if ( row[j] === ' ') break
      if ( row[j] === '+'){
        let rightCornerPos = j
        for ( let k = indx+1; k < input.length; k++){
          let left = input[k][leftCornerPos]
          let right = input[k][rightCornerPos]
          let allowed = ['|','+']
          if ( !allowed.includes(left) || !allowed.includes(right) ) break
          if ( left == '+' && right == '+' && 
               !input[k].slice(leftCornerPos,rightCornerPos).includes(' ')) count++
        }
      }
     }
   }
  }) 
   return count
}

