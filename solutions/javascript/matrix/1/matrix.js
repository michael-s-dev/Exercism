//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(s) {
   this.matrix = this.createMatrix(s)
  }
  
  get rows() {
   return this.matrix
  }

  get columns() {
    let columns = []
    for (let i = 0 ; i < this.matrix[0].length; i++){
      let col = []
      for (let row of this.matrix) {
         col.push(row[i])
      } 
     columns.push(col)
    }
    return columns
  }

  createMatrix(s){
    let rows = s.split('\n')
    return rows.reduce( (acc,row) => {
      acc.push(row.split(/\s/).map(Number))
      return acc
    }, [])
  }
}
