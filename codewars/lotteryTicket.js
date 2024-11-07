function bingo(ticket, win) {
  let miniWins = 0
  ticket.forEach((arr) => {
    const tickets = arr[0].split('')
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].charCodeAt() === arr[1]) {
        miniWins++
        break
      }
    }
  })
  return miniWins < win ? 'Loser!' : 'Winner!'
}

console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  )
)
