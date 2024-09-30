function queueTime(customers, n) {
  if (customers.length === 0) return 0;

  if (customers.length <= n) {
    return customers.reduce((acc, e) => {
      return acc > e ? acc : e;
    });
  }
  const cass = Array(n).fill(0);
  customers.forEach((e) => {
    cass[0] += e;
    cass.sort((a, b) => a - b);
  });
  return Math.max(...cass);
}

console.log(queueTime([10, 2, 3, 3], 2));
