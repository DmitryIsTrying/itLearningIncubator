function calculate(s) {
  let stack = []
  let num = 0
  let sign = 1
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    if (!isNaN(char) && char !== ' ') {
      // Если символ является цифрой, формируем число
      num = num * 10 + parseInt(char, 10)
    } else if (char === '+' || char === '-') {
      // Если символ является '+' или '-', добавляем текущее число к результату
      result += sign * num
      // Сбрасываем num
      num = 0
      // Устанавливаем знак для следующего числа
      sign = char === '+' ? 1 : -1
    } else if (char === '(') {
      // Если символ является '(', сохраняем текущий результат и знак в стеке
      stack.push(result)
      stack.push(sign)
      // Сбрасываем результат и знак для вычисления внутри скобок
      result = 0
      sign = 1
    } else if (char === ')') {
      // Если символ является ')', добавляем текущее число к результату
      result += sign * num
      // Сбрасываем num
      num = 0
      // Восстанавливаем результат и знак из стека
      result *= stack.pop() // знак
      result += stack.pop() // результат до скобок
    }
  }

  // Добавляем последнее число к результату
  result += sign * num

  return result
}

// Пример использования:
console.log(calculate('1 + 1')) // 2
console.log(calculate(' 2-1 + 2 ')) // 3
console.log(calculate('(1+(4+5+2)-3)+(6+8)')) // 23
