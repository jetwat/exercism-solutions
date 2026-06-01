//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (/^\s*$/.test(message)) {
    return 'Fine. Be that way!'
  };
  if (/^[^A-Za-z]*[A-Z]+(?:[^a-z]*)$/.test(message)) {
    return /\?\s*$/.test(message)? "Calm down, I know what I'm doing!": 'Whoa, chill out!'
  };
  return /\?\s*$/.test(message)? 'Sure.': 'Whatever.'
}