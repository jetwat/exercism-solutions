//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,orderNum) => {
  const LastDigit = (orderNum+10)%10;
  const LastTwoDigit = (orderNum+100)%100;
  const otherTH = (LastTwoDigit !== 11) && (LastTwoDigit !== 12) && (LastTwoDigit !== 13) && (LastDigit !== 1) && (LastDigit !== 2) && (LastDigit !== 3);
  let nth;
  switch (LastDigit) {
    case (1):
      nth = (orderNum + 'st');
      break;
    case (2):
      nth = (orderNum + 'nd');
      break;
    case (3):
      nth = (orderNum + 'rd');
      break;
  }
  switch (LastTwoDigit) {
    case (11):
      nth = (orderNum + 'th');
      break;
    case (12):
      nth = (orderNum + 'th');
      break;
    case (13):
      nth = (orderNum + 'th');
      break;
  }
  if (otherTH) {
    nth = (orderNum + 'th');
  }
  return `${name}, you are the ${nth} customer we serve today. Thank you!` 
};
