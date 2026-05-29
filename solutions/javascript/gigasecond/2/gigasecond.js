//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (...v) => {
  // console.log(v[0].getTime());
  // console.log(v[0] instanceof Date);
  return new Date(((v[0].getTime())+1e12));
};
