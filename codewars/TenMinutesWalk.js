function isValidWalk(walk) {
  console.log(walk);

  if (walk.length !== 10) return false;
  const object = walk.reduce(
    (acc, element) => {
      if (element === "n") acc.n++;
      if (element === "s") acc.n--;
      if (element === "w") acc.w++;
      if (element === "e") acc.w--;
      return acc;
    },
    { n: 0, w: 0 }
  );
  console.log(object);

  return !object.n && !object.w;
}

console.log(isValidWalk(["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"]));
