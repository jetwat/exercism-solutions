//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (a,b) => {
  let count = 0;
  if (a.length !== b.length) throw new Error("strands must be of equal length");
  [...a].map((e,i) => {
    if (e !== [...b][i]) count++;
  })
  return count;
};
