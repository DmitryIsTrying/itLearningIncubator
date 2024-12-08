// function convert(input, source, target) {
//   let decimalValue = 0
//   const sourceBase = source.length
//   for (let i = 0; i < input.length; i++) {
//     const char = input[input.length - 1 - i]
//     const value = source.indexOf(char)
//     decimalValue += value * Math.pow(sourceBase, i)
//   }

//   const targetBase = target.length
//   if (decimalValue === 0) return target[0]

//   let result = ''
//   while (decimalValue > 0) {
//     const remainder = decimalValue % targetBase
//     result = target[remainder] + result
//     decimalValue = Math.floor(decimalValue / targetBase)
//   }

//   return result
// }

module.exports = function (participants, sports) {
  /**
   * Подобно оператору new создает экземпляр объекта,
   * используя функцию-конструктор и параметры для нее
   */
  function constructFrom(fnConstructor, ...params) {
    const res = {}

    fnConstructor.bind(res).apply(params)

    Object.setPrototypeOf(res, fnConstructor)

    return res
  }

  /**
   * Создает пары вида ["вид спорта", "имя участника"],
   * где первому виду спорта соответствует последний участник
   */
  function assignParicipants() {
    const participants = this.participants
    const sports = this.sports
    const orderIndexes = []
    let i = sports.length - 1

    while (i--) {
      orderIndexes.push(function () {
        return i
      })
    }

    return orderIndexes.map((getSportIndex, i) => [sports[i], participants[getSportIndex()]])
  }

  function Contest(participants, sports) {
    this.participants = participants
    this.sports = sports
  }

  Contest.prototype.assignParicipants = assignParicipants

  const contest = constructFrom(Contest, participants, sports)

  return contest.assignParicipants()
}
