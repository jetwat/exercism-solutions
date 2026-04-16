/*
  // @ts-check
  //
  // The line above enables type checking for this file. Various IDEs interpret
  // the @ts-check directive. It will give you helpful autocompletion when
  // implementing this exercise.
*/

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // totalBirdCount(birdsPerDay.splice((week-1)*7,birdsPerDay.length).splice((week)*7,birdsPerDay.length));
  
  let totalCount = 0;
  let startOfThisWeekIndex = (week-1)*7;
  let startOfNextWeekIndex = (week)*7;
  for (let i = startOfThisWeekIndex; i < (startOfNextWeekIndex); i++) {
      totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
}
