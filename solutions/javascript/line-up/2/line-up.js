//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,orderNum) => {
  const lastDigit = (orderNum+10)%10;
  const lastTwoDigits = (orderNum+100)%100;
  let suffix = 'th';
  
  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    if (lastDigit === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3) suffix = 'rd';
  }

  return `${name}, you are the ${orderNum}${suffix} customer we serve today. Thank you!` 
};
