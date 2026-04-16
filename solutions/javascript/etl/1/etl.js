
export const transform = (data) => {
   return Object.entries(data).reduce( (acc,[key,values]) => {
     values.forEach( letter => acc[letter.toLowerCase()] = Number(key))
     return acc
   }, {})
};
