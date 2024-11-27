function ipToInt32(ip) {
  const arr = Array.from(ip.split('.'), Number)
  return arr[0] * 256 ** 3 + arr[1] * 256 ** 2 + arr[2] * 256 ** 1 + arr[3] * 256 ** 0
}

console.log(ipToInt32('128.32.10.1'))
