
// Prvá idea, perf. slow

// export const score = (word) => {
//   const pointsMap = [ ['aeioulnrst' , 1] , ['dg' , 2] , ['bcmp' , 3] , ['fhvwy' , 4] , ['k' , 5] , ['jx' , 8], ['qz' , 10] ]
//   let sum = 0
//   word.split('').forEach( letter => {
//     for (let [letters,points] of pointsMap) {
//       if( letters.includes(letter.toLowerCase())){
//         sum += points
//         break
//       }
//     }
//   } )
//   return sum
// };

const map = [ ['aeioulnrst' , 1] , ['dg' , 2] , ['bcmp' , 3] , ['fhvwy' , 4] , ['k' , 5] , ['jx' , 8], ['qz' , 10] ]
const pointsMap = map.reduce( (acc,[letters,points]) => {
  for (let letter of letters) {
    acc[letter] = points
  }
  return acc
}, {})

export const score = (word) => {
  return word.split('').reduce( (acc,letter) => acc + pointsMap[letter.toLowerCase() || 0], 0)
};

