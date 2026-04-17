//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #active;
  #balance;
  
  constructor() {
    this.#active = false
    this.#balance = 0
  }

  open() {
    if ( this.#active ) throw new ValueError()
    this.#active = true
  }

  close() {
    if ( !this.#active ) throw new ValueError()
    this.#active = false  
    this.#balance = 0
  }
  deposit(amount) {
    if ( !this.#active || amount <= 0) throw new ValueError()
    this.#balance += amount
  }

  withdraw(amount) {
     if ( amount > this.#balance || amount <= 0 ) throw new ValueError()
     this.#balance -= amount
  }

  get balance() {
    if ( !this.#active ) throw new ValueError()
    return this.#balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
