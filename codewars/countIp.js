function ipsBetween(start, end) {
  const ipToInt = (ip) => {
    return ip.split('.').reduce((acc, octet, index) => {
      return acc + BigInt(parseInt(octet)) * BigInt(256) ** BigInt(3 - index)
    }, BigInt(0))
  }

  const startInt = ipToInt(start)
  const endInt = ipToInt(end)

  return Number(endInt - startInt)
}
console.log(ipsBetween('190.232.64.133', '215.39.79.226'))
