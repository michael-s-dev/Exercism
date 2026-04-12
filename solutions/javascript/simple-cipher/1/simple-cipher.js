//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
      this.letters = 'abcdefghijklmnopqrstuvwxyz'
      this._key = key || this.generateKey()
  }

  encode(word) {
   return this.code(word,'encode')
  }

  decode(word) {
   return this.code(word,'decode')
  }

  code(word,type){
   let result = ''
    for (let i = 0; i < word.length; i++) {
        let j = i % this._key.length
        let char = word[i]
        let shift = this.letters.indexOf( this._key[j] )
        let charPos = this.letters.indexOf( char )
        if( type === 'decode')
         shift = charPos - shift < 0 ? 26 + ( charPos - shift ) % 26 : charPos - shift
        if( type === 'encode')
          shift = charPos + shift > 25 ? ( charPos + shift ) % 26  : charPos + shift
        result += this.letters[shift] 
      }
    return result
  }

  generateKey(){
    let key = ''
    for (let i = 0; i < 100; i++) {
      key += this.letters[Math.floor(Math.random()*26)]
    }
    return key
  }

  get key() {
   return this._key
  }
}
