//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(data = []) {
    this.data = [...data] 
  }

  append(list) {
    this.data =  [...this.data, ...list.data]
    return this
  }

  get values(){
    return this.data
  }

  concat(lists) {
    if ( lists.length)
     lists.data.forEach( list =>  this.data = [...this.data, ...list.data] )
    if ( lists.data.length === 0 )
      this.append(lists)
    return this
  }

  filter(fn) {
      let filtered = []
      for (let i = 0; i < this.data.length; i++) {
         if ( fn(this.data[i])) filtered.push(this.data[i])
      }
    this.data = [...filtered]
    return this
  }

  map(fn) {
      let result = []
      for (let i = 0; i < this.data.length; i++) {
          result.push( fn(this.data[i]) )
      }
    this.data = [...result]
    return this

  }

  length() {
     return this.data.length
  }

  foldl(fn,acc) {
    let result = acc
    for (let i = 0; i < this.data.length; i++) {
       result = fn(result, this.data[i])
    }
    return result
  }

  foldr(fn,acc) {
    let result = acc
    for (let i = this.data.length -1 ; i >= 0; i--) {
       result = fn(result, this.data[i])
    }
    return result
  }
  

  reverse() {
   let result = []
    for (let i = this.data.length -1 ; i >= 0; i--)  {
       result.push(this.data[i])
    }
    this.data = [...result]
    return this
  }
}
