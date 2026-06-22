//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (legacy) => {
  console.log("a", Object.entries(legacy));
  const newObj = {};
  for (const [key, value] of Object.entries(legacy)) {
    for (let i=0; i<value.length; i++) {
      newObj[value[i].toLowerCase()] = Number(key);
    }
  }
  return newObj;
};
