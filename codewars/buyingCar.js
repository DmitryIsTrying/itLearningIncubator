function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let money = 0
  let month = 0
  while (startPriceOld + money < startPriceNew) {
    if (month % 2 !== 0) {
      percentLossByMonth += 0.5
    }
    console.log(percentLossByMonth)

    startPriceOld = (startPriceOld * (100 - percentLossByMonth)) / 100
    startPriceNew = (startPriceNew * (100 - percentLossByMonth)) / 100
    money += savingperMonth
    console.log(startPriceOld)

    console.log(startPriceOld + money - startPriceNew)

    month++
  }

  return [month, Math.round(startPriceOld + money - startPriceNew)]
}
console.log(nbMonths(9000, 8000, 1000, 1.5))
