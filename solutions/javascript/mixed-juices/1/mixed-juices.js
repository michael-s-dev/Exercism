
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy': return 0.5
    case 'Energizer':
    case 'Green Garden': return 1.5
    case 'Tropical Island': return 3
    case 'All or Nothing':return 5
    default: return 2.5
  }

}

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0
  let i = 0
  while( wedges < wedgesNeeded){
    switch(limes[i]){
      case 'small': 
        wedges += 6
        break
      case 'medium': 
        wedges += 8
        break
      case 'large': 
        wedges += 10
        break
    }
    if( i >= limes.length ) break
    i++
  }
  return i 
}

export function remainingOrders(timeLeft, orders) {
 let remaining = []
  for (let order of orders) {
    if ( timeLeft <= 0) remaining.push(order)
    else {
      console.log("Preparing " + order)
      timeLeft -= timeToMixJuice(order)
    }
  }
  return remaining
}
