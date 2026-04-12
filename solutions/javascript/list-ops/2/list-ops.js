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
    let newList = new List(this.values)
    lists.data.forEach( list =>  newList.append(list) )
    return newList
  }

  filter(fn) {
      let filtered = []
      for (let i = 0; i < this.data.length; i++) {
         if ( fn(this.data[i])) filtered.push(this.data[i])
      }
    this.data = [...filtered]
   return new List(filtered);
  }

  map(fn) {
      let result = []
      for (let i = 0; i < this.data.length; i++) {
          result.push( fn(this.data[i]) )
      }
    this.data = [...result]
    return new List(result);

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
    return new List(result);
  }
}
