// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  // console.log(command.match(/chatbot/i).index);
  return !(command.match(/chatbot/i).index);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  // console.log(message);
  return message.replace(/emoji[0-9][0-9][0-9][0-9]/g,"");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  // console.log(number);
  return /\(\+[0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]/.test(number) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  // console.log(userInput);
  return userInput.split(" ").filter(i=>/\./.test(i));
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  // console .log(fullName);
  const arr = fullName.split(", ");
  return "Nice to meet you, Name Surname".replace(/name|surname/gi,(w)=>(arr.pop()));
}
