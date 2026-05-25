//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, sec) => {
  const ORBITAL = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  }
  // console.log(planet.split('').slice(0,1).join('').toUpperCase());
  // console.log(planet.replace(/^[a-zA-Z]/,(planet[0].toUpperCase()))); //*31557600
  const planetOrbital = ORBITAL[planet.replace(/^[a-zA-Z]/,(planet[0].toUpperCase()))];
  if (!planetOrbital) {
    throw new Error('not a planet') 
  } else {
    return Math.round(sec/(planetOrbital*31557600)*100)/100;
  }
};
