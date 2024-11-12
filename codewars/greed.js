class Greed {
  constructor(dices) {
    this.dices = [...dices]
    this.rules = [
      { count: 3, dice: 1, points: 1000 },
      { count: 3, dice: 6, points: 600 },
      { count: 3, dice: 5, points: 500 },
      { count: 3, dice: 4, points: 400 },
      { count: 3, dice: 3, points: 300 },
      { count: 3, dice: 2, points: 200 },
      { count: 1, dice: 1, points: 100 },
      { count: 1, dice: 5, points: 50 },
    ]
    this.points = undefined
  }

  play() {
    this.points = 0
    for (let i = 0; i < this.rules.length; i++) {
      let deleteArr = []
      let counter = this.rules[i].count
      let inx = 0
      console.log(this.rules[i].dice)
      console.log(this.dices)

      while (~this.dices.indexOf(this.rules[i].dice, inx)) {
        deleteArr.push(this.dices.indexOf(this.rules[i].dice, inx))
        inx = this.dices.indexOf(this.rules[i].dice, inx) + 1
        counter--
      }
      console.log(deleteArr.length / this.rules[i].count)
      console.log('------')
      this.points += this.rules[i].points * Math.floor(deleteArr.length / this.rules[i].count)
      if (Math.floor(deleteArr.length / this.rules[i].count)) {
        deleteArr = deleteArr.slice(0, Math.floor(deleteArr.length / this.rules[i].count) * this.rules[i].count)
        this.dices = this.dices.filter((_, i) => !deleteArr.includes(i))
      }
    }
    return this.points
  }
}

function score(dice) {
  const greed = new Greed(dice)
  greed.play()
  return greed.points
}

console.log(score([1, 1, 1, 1, 2]))
