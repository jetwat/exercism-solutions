//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  const mapObj = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong',
  };
  let ans = "";
  for (const [key, value] of Object.entries(mapObj)) {
    if (num % Number(key) === 0) ans += value;
  }
  if (ans === "") ans = String(num);
  return ans;
};
