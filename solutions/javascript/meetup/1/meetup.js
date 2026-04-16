
export const meetup = (year, month, rank, day) => {
  const days = ['Sunday', 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday', 'Saturday']
  const ranking = ['first' , 'second' , 'third' , 'fourth' ]
  const isTeenth = () => date.getDate() > 12 && date.getDate() < 20
  let date = new Date(year,month-1)
  let targetDay = { count : -1 , last : 0 }

  let i = 0
  while( true ){
    i++
    date.setDate(i)
    if( date.getMonth() !== month-1 ) break
    if( date.getDay() === days.indexOf(day) ) {
      targetDay.count++
      targetDay.last = i
      if ( targetDay.count === ranking.indexOf(rank) ) return date
      if ( rank === 'teenth' && isTeenth() ) return date
    }    
  }
  if ( rank === 'last' ) {
      date = new Date(year,month-1)
      date.setDate(targetDay.last)
      return date
    }
};
