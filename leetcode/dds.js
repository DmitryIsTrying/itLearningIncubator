// function strJoin(char, ...elms) {
//   return elms.join(char)
// }

function strJoinES5(char) {
  // Преобразуем arguments в массив и берем все аргументы, начиная со второго
  var args = Array.prototype.slice.call(arguments, 1)
  // Объединяем элементы массива с помощью переданного разделителя
  return args.join(char)
}
console.log(strJoinES5('.', 'a', 'b', 'c'))
