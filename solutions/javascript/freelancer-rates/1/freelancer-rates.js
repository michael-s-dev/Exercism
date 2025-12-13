
export function dayRate(ratePerHour) {
return ratePerHour * 8
}


export function daysInBudget(budget, ratePerHour) {
  return Math.floor( budget / dayRate(ratePerHour) )
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
 let months = Math.floor(numDays / 22)
 let sum = months * 22 * dayRate(ratePerHour)
 let discountSum = sum * discount
 let days = numDays % 22
 let normalPriceSum = days * dayRate(ratePerHour)
 return Math.ceil(sum - discountSum + normalPriceSum)
}
