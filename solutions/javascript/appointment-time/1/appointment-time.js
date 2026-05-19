// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  // console.log("a", days, now);
  const curr = new Date(now);
  // console.log("b", curr);
  
  if (now !== undefined) {
    curr.setDate(curr.getDate()+days)
    return curr;
  } else {
    return new Date(); 
  }
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  // console.log(appointmentDate);
  // console.log(appointmentDate.toISOString());
  
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const app = new Date(timestamp);
  // console.log("a", app);
  return  { year:app.getFullYear() , month:app.getMonth() , date:app.getDate() , hour:app.getHours(), minute: app.getMinutes() };
}
/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  // console.log(options);
  const app = new Date(timestamp);
  if (options.year !== undefined) app.setFullYear(options.year);
  if (options.month !== undefined) app.setMonth(options.month);
  if (options.date !== undefined) app.setDate(options.date);
  if (options.hour !== undefined) app.setHours(options.hour);
  if (options.minute !== undefined) app.setMinutes(options.minute);
  
  return getAppointmentDetails(app);
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  // const timeA = new Date(timestampA);
  // const timeB = new Date(timestampB);
  return Math.round((new Date(timestampB) - new Date(timestampA))/1000);
  // return Math.round((timeB.getTime()-timeA.getTime()));
  
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return appointmentTimestamp > currentTimestamp;
}
