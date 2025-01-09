var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0 // Общее количество бензина
  let totalCost = 0 // Общее количество затрат
  let currentGas = 0 // Текущий баланс бензина
  let start = 0 // Стартовая точка

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
    currentGas += gas[i] - cost[i]

    // Если текущий баланс отрицательный, начинаем с новой точки
    if (currentGas < 0) {
      start = i + 1
      currentGas = 0
    }
  }

  // Если общее количество бензина >= общему количеству затрат, возвращаем стартовую точку
  return totalGas >= totalCost ? start : -1
}
const gas = [5, 1, 2, 3, 4],
  cost = [4, 4, 1, 5, 1]

console.log(canCompleteCircuit(gas, cost))
