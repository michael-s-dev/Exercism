//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  constructor(){
   this.animals = [
      { name: 'fly', reaction: "I don't know why she swallowed the fly. Perhaps she'll die." },
      { name: 'spider', reaction: "It wriggled and jiggled and tickled inside her." },
      { name: 'bird', reaction: "How absurd to swallow a bird!" },
      { name: 'cat', reaction: "Imagine that, to swallow a cat!" },
      { name: 'dog', reaction: "What a hog, to swallow a dog!" },
      { name: 'goat', reaction: "Just opened her throat and swallowed a goat!" },
      { name: 'cow', reaction: "I don't know how she swallowed a cow!" },
      { name: 'horse', reaction: "She's dead, of course!" }
    ];
  }
  verse(num) {
    let animal = this.animals[num-1]
    let br = "\n"
    let result = `I know an old lady who swallowed a ${this.animals[num-1].name}.\n` // intro   
    if ( animal.name === 'horse') return result + animal.reaction + br
    if (num > 1) result += animal.reaction + br
    if( num >= 2) {
      for ( let i = num-1;  i >= 1; i--){
        result += `She swallowed the ${this.animals[i].name} to catch the ${this.animals[i-1].name}`
        if ( i == 2 ) result += this.animals[1].reaction.replace("It" , ' that') + br
        else result += ".\n"
      }
    }
    result += this.animals[0].reaction + br 
    return result
  }

  verses(start,end) {
    let final = ''
    for ( let i = start; i <= end; i++)
      final += this.verse(i) + "\n"
    return final
  }
}
