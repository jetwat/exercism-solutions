//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (v) => {
  const CODE = [ "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  // console.log(v);
  // console.log(mapped);
  // const mapped = v.map((i)=>(code[i]));
  // console.log(v.map((i)=>(code[i]))); 
  // return String(v.map((i)=>(code[i])));
  // return Number(v.map((i)=>(code[i])).splice(0,2).reduce((acc,cur)=>(acc = `${acc}`+`${cur}`),""));
  return CODE.indexOf(v[0])*10 + CODE.indexOf(v[1]);
};
