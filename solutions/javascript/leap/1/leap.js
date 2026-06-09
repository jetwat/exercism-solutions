//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (number) => {
  return number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0);
};
