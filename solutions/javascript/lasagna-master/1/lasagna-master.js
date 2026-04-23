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
// 1
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  return (!remainingTime) ? 'You forgot to set the timer.': 'Not done, please wait.';
}

// 2
export function preparationTime(layers, timePerLayers = 2) {
  return layers.length * timePerLayers;
}

// 3
export function quantities(layers) {
  
  const retArr = {
    noodles: 0,
    sauce: 0,
  }
  
  for (let i = 0; i < layers.length; i++) {
    switch (layers[i]) {
      case ("sauce"):
        retArr.sauce += 0.2;
        break;
      case ("noodles"):
        retArr.noodles += 50;
        break;
    }
  }
  
  return retArr;
}

// 4
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1]);
  return;
}

// 5
export function scaleRecipe(recipe, portions = 1) {
  const newRecipe = {...recipe};
  for (let attr in newRecipe) {
    newRecipe[attr] = (newRecipe[attr]/2) * portions;
  }
  return newRecipe;  
}