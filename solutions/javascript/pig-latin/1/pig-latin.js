const VOWELS = 'aeiou'

export const translate = s => {
         return s.split(' ').map( word => translateWord(word)).join(' ')
};
function translateWord(s){
    // rule 1
   if( isVowel(s[0]) || s.slice(0,2) === 'xr' || s.slice(0,2) === 'yt')
      return s + 'ay'
   // rule 2-4
   let part = ''
   for( let i = 0 ; i < s.length; i++){
     let char = s[i]
     if ( char === 'u' && part.at(-1) === 'q') { 
       part += char
       break
     }
     if ( isVowel(char)) break
     if ( char === 'y' && part.length ) break
     part += char
   }
   return s.slice(part.length)+part+'ay'
}
function isVowel(char){
     return VOWELS.includes( char )
}
