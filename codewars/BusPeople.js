var number = function (busStops) {
  let a = 0;
  let b = 0;
  busStops.map((e) => {
    a += e[0];
    b += e[1];
  });
  return a - b;
};
