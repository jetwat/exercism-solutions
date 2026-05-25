//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (...v) => {
  //console.log(v);
  return new Date((Number(v[0])+1000000000000));
};
