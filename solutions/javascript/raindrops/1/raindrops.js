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

  const mapArr = [3, 5, 7];

  let ans = "";

  for (const e of mapArr) {
    if (num % e === 0) ans += mapObj[e];
  }
  
  if (ans === "") ans = String(num);

  return ans;
};
