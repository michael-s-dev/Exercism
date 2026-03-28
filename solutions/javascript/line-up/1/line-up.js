//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,count) => {
 let ending = 'th'
 switch( count % 10 ){
   case 1 : if (  count % 100 !== 11 ) ending = 'st' ; break
   case 2 : if (  count % 100  !== 12 ) ending = 'nd' ; break
   case 3 : if (  count % 100  !== 13 ) ending = 'rd' ; break
 }

 return `${name}, you are the ${count + ending} customer we serve today. Thank you!`

};
