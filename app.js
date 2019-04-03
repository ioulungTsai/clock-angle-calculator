// this is a function to calculate the angle in between hour hand and minute hand
// take two arguments, hour and minute to generate angle
// can calculate in 12-hour system or 24-hour system

function clockAngleCalculator(hour, minute) {
  // convert hour to minute
  let hourToMinute = hour * 5;
  // hour hand adjust according to minute hand
  let hourHandAdjust = Math.floor(minute / 12);
  if (hour % 12 === 0) {
    return `${Math.abs(minute - hourHandAdjust) * 6} degrees`
  } else if (hour < 12) {
    return `${Math.abs(minute - hourToMinute - hourHandAdjust) * 6} degrees`
  } else {
    return `${Math.abs(minute - (hour - 12) * 5 - hourHandAdjust) * 6} degrees`
  }
}

module.exports = clockAngleCalculator;