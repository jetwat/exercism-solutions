//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (v) => {
  const code = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }
  // console.log(v);
  // console.log(mapped);
  // const mapped = v.map((i)=>(code[i]));
  // console.log(v.map((i)=>(code[i]))); 
  // return String(v.map((i)=>(code[i])));
  return Number(v.map((i)=>(code[i])).splice(0,2).reduce((acc,cur)=>(acc = `${acc}`+`${cur}`),""));
};
