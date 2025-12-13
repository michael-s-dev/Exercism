
export function needsLicense(kind) {
   return kind === 'car' ||  kind === 'truck'
}

export function chooseVehicle(option1, option2) {
 if ( option1 < option2) return `${option1} is clearly the better choice.`
 return `${option2} is clearly the better choice.`
}

export function calculateResellPrice(originalPrice, age) {
return age < 3 ? originalPrice * 0.8 : age <=  10 ? originalPrice * 0.7 : originalPrice * 0.5
}
