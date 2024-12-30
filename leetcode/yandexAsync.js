function findPath(from, to, fetchFlights) {
  let result = [from]
  return fetchFlights(from)
    .then((arr) => {
      if (arr.includes(to)) {
      }
    })
    .catch((err) => {})
}
