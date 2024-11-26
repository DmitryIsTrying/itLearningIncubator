function whatCentury(year) {
  var century = Math.ceil(year / 100)
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th')
}
console.log(whatCentury('2001'))
