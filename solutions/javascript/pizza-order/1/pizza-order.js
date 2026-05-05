/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let accPrice; 
  if (typeof pizza === "string") { 
    switch (pizza) {
      case ("Margherita"):
        accPrice = 7;
        break;
      case ("Caprese"):
        accPrice = 9;
        break;
      case ("Formaggio"):
        accPrice = 10;
        break;
    }
  } else {
    accPrice = pizza;
  }
  if (extras.length === 0) {
    return accPrice;
  }
  accPrice += (extras.splice(0,1)[0]==="ExtraSauce"? 1 : 2);
  return pizzaPrice(accPrice, ...extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, { pizza, extras }) => total + pizzaPrice(pizza, ...extras), 0);
}
