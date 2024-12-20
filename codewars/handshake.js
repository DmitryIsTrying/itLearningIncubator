function getParticipants(handshakes) {
  let result = 0
  let counter = 0
  for (let i = 1; result < handshakes; i++) {
    result += i - 1
    counter++
  }
  return counter
}
console.log(getParticipants(3))
