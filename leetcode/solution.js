function solution(arr, k) {
  const mapa = { 0: 1 }
  let sum = 0
  let answer = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    const findNum = sum - k
    answer += mapa[findNum] || 0
    mapa[sum] = (mapa[sum] || 0) + 1
  }

  return answer
}

console.log(solution([4, 2, 2, 1, 2, -3, 5, -8], 5))
