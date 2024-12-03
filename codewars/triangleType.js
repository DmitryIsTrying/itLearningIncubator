/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y)

  const [small1, small2, longest] = sides

  if (small1 + small2 <= longest) {
    return 0
  }

  const small1Squared = small1 * small1
  const small2Squared = small2 * small2
  const longestSquared = longest * longest

  if (small1Squared + small2Squared === longestSquared) {
    return 2
  }

  if (small1Squared + small2Squared > longestSquared) {
    return 1
  }

  return 3
}
console.log(triangleType(8, 5, 7))
