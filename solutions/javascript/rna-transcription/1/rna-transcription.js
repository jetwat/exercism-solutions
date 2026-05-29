//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (inputString) => {
  const MAP = {"A":"U","C":"G","G":"C","T":"A"};
  let arr = [];
  if (inputString.length) {
    for (let key of inputString) {
      arr.push(MAP[key]);
    }
    arr = arr.join('');
  } else {
    arr = "";
  } 
  return arr;
}
