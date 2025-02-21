var validMountainArray = function (arr) {
  if (arr.length < 3) return false

  let isDown = false
  let counter = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false
    }

    if (arr[i - 1] > arr[i]) {
      counter++
      isDown = true
    }

    if (isDown) {
      if (arr[i - 1] < arr[i]) return false
    }
  }

  if (!isDown) {
    return false
  }

  if (counter === arr.length) return false

  return true
}
// console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

class MyCalendarTwo {
  #booking = []
  #overlaps = []

  book(startTime, endTime) {
    for (const [start, end] of this.#overlaps) {
      if (endTime > start && end > startTime) {
        return false
      }
    }

    for (const [start, end] of this.#booking) {
      if (endTime > start && end > startTime) {
        this.#overlaps.push([Math.max(start, startTime), Math.min(end, endTime)])
      }
    }

    this.#booking.push([startTime, endTime])

    return true
  }
}
