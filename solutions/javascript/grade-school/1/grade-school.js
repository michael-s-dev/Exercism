//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this.roost = { }
  }
  
  roster() {
    let studentList = []
    for (let grade in this.roost) {
       studentList = studentList.concat(this.roost[grade].sort())
    }
    return studentList
  }

  add( student , grade) {

    if ( !this.roost[grade] ) this.roost[grade] = []
    
    if( !this.roster().includes(student) ) {
      this.roost[grade].push(student)
      return true
    }
    return false
  }

  grade(grade) {
    return this.roost[grade] ?? []
  }
}
