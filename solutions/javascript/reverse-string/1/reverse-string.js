//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (text) => {
  const arr = [...text];
  return arr.map((e,i)=>arr[arr.length-i-1]).join("");
};
