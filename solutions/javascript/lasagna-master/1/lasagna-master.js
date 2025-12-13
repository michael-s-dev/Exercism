/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
  if ( remainingTime === undefined ) return 'You forgot to set the timer.'
  if ( remainingTime === 0 ) return 'Lasagna is done.'
  return 'Not done, please wait.'
}


export function preparationTime(layers, time = 2){
   return layers.length * time
}


export function quantities(layers){
   return layers.reduce( (acc,layer) => {
     if( layer === 'sauce') acc.sauce += 0.2
     if( layer === 'noodles') acc.noodles += 50
     return acc
   }, {'noodles' : 0 , 'sauce' : 0})
}

export function addSecretIngredient(friendsList, myList){
  myList.push( friendsList.at(-1) )
}

export function scaleRecipe(recipe,scale = 2) {
  let newRecipe = {}
  for (let i in recipe) {
     newRecipe[i] = recipe[i] / 2 * scale
  }
  return newRecipe
}
