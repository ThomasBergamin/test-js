const ftoc = function(temperature) {
  let temperatureConverted = (temperature - 32) * 5/9;
  let temperatureToReturn = Math.round(temperatureConverted * 10) / 10;
  return temperatureToReturn;
}

const ctof = function(temperature) {
  let temperatureConverted = temperature * 9/5 + 32;
  let temperatureToReturn = Math.round(temperatureConverted * 10) / 10;
  return temperatureToReturn;
}

module.exports = {
  ftoc,
  ctof
}
