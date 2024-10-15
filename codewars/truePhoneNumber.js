function validPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\d/g, 'x') === '(xxx) xxx-xxxx'
}

console.log(validPhoneNumber('(123) 456-7890'))
