// Code your solution in this file

function findMatching(arrayOfDrivers, string) {
  return arrayOfDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(arrayOfDrivers, string) {
  return arrayOfDrivers.filter(driver => driver.toLowerCase().slice(0, string.length) === string.toLowerCase().slice(0, string.length))
}

function matchName(arrayOfDrivers, name) {
  return arrayOfDrivers.filter(driver => driver.name === name)
}
