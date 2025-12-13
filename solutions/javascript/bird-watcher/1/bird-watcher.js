
export function totalBirdCount(birdsPerDay) {
  return Array.from(birdsPerDay).reduce( (birds,acc) => acc + birds , 0)
}


export function birdsInWeek(birdsPerDay, week) {
  let weekStartDay = 7*(week - 1)
  let weekEndDay =  weekStartDay + 7
  let count = 0
  for( let i = weekStartDay ;  i < weekEndDay ; i++){
     count += birdsPerDay[i]
  }
  return count
}

export function fixBirdCountLog(birdsPerDay) {
   for(let i = 0 ; i < birdsPerDay.length ; i = i +2){
      birdsPerDay[i]++
   }

}
