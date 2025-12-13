
export function frontDoorResponse(line) {
   return line[0]
}


export function frontDoorPassword(word) {
  return frontDoorResponse(word).toUpperCase() + word.toLowerCase().slice(1)
}


export function backDoorResponse(line) {
  return line.trim().at(-1)
}


export function backDoorPassword(word) {
   return frontDoorPassword(word) + ', please'
}
