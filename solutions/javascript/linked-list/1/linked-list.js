//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 class ListNode {
  constructor(data,next,prev){
    this.data = data
    this.next = next
    this.prev = prev
  }
}

export class LinkedList {
  constructor( head = null ){
    this.head = head
    this.tail = null
    this.size = 0
  }
  push(n) {
    
    let newStation = new ListNode(n,null,this.tail) // new station node

    if ( this.size > 0) 
      this.tail.next = newStation 
    else          
      this.head = newStation  
    
    this.tail = newStation
    this.size++
  }

  pop() {

    if ( this.size === 0 ) throw new Error('List is empty')

    let removedStation = this.tail.data
      
    if( this.size > 0)
      this.tail = this.tail.prev
    else {
      this.tail = null
      this.head = null
    }

    this.size--
    return removedStation
    

  }

  shift() {
    if ( this.size === 0 ) throw new Error('List is empty')

     let removedStation = this.head.data
      
    if( this.size > 0)
      this.head = this.head.next
    else {
      this.tail = null
      this.head = null
    }

    this.size--
    return removedStation
  }

  unshift(n) {
    let newStation = new ListNode(n,this.head) // new station node

    if ( this.size > 0)
      this.head.prev = newStation
    else
      this.tail = newStation
    
    this.head = newStation
    this.size++
  }
  

  delete(n) {
      if ( this.size === 0 ) throw new Error('List is empty')
      let lastNode = this.head
      while ( lastNode !== null ){
        if ( lastNode.data === n){
           if ( lastNode.next !== null) lastNode.next.prev = lastNode.prev
           else this.tail = this.tail.prev

           if ( lastNode.prev !== null ) lastNode.prev.next = lastNode.next
           else this.head = this.head.next
         this.size--
         break
        }
       lastNode = lastNode.next
      }
  }

  count() {
    return this.size
  }
}
