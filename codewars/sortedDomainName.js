function domainName(url) {
  if (url.includes('//')) {
    let str = url.slice(url.indexOf('//') + 2)
    if (str.includes('www')) str = str.slice(4)
    return str.slice(0, str.indexOf('.'))
  }
  if (url.includes('www')) url = url.slice(4)

  return url.slice(0, url.indexOf('.'))
}
console.log(domainName('icann.org'))
