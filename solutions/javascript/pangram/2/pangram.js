//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // let arr = [];
  // let inputArr = input.trim().toLowerCase().split('');
  
  // while (arr.length < 26 && input !== '') {
  //   const lastItem = inputArr.pop();
  //   const isAlphabet = alphabet.indexOf(lastItem) !== -1;
  //   const isNotInArr = arr.indexOf(lastItem) === -1;
    
  //   if ( isAlphabet && isNotInArr ) arr.push(lastItem);
  //   if (inputArr.length === 0) break;
    
  // }
  // // console.log(arr);
  // return arr.length === 26;

  return [...'abcdefghijklmnopqrstuvwxyz'].every(i=>input.toLowerCase().includes(i));
};
