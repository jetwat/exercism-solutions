//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (number) => {
  if (!(number % 400)) return true;
  return ((number % 4) === 0) && ((number % 100) !== 0)
};
