function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  const result = [];

  for (let i = 1; i <= n; i += 2) {
    const spaces = " ".repeat((n - i) / 2);
    result.push(spaces + Array(i).fill("*").join("") + "\n");
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);
    result.push(spaces + Array(i).fill("*").join("") + "\n");
  }

  return result.join("");
}

console.log(diamond(13));
