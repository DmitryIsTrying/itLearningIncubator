String.prototype.camelCase = function () {
  console.log(this);

  if (this === "") return undefined;
  return this.split(" ")
    .map((el) => {
      if (!el) return undefined;
      return (el = el[0].toUpperCase() + el.slice(1));
    })
    .join("");
};
console.log("".camelCase());
