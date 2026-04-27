// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1000;
  const max = 9999;
  const range = max-min;
  return `NCC-${min+Math.floor(Math.random()*(range))}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000;
  const max = 41999;
  const range = max-min;
  return min+Math.floor(Math.random()*(range));
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetaryClasses = "DHJKLMNRTY";
  return planetaryClasses[Math.floor(Math.random()*(planetaryClasses.length))];
}
