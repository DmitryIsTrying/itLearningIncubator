const searchBtn = document.getElementById("search-button");
const searchInt = document.getElementById("search-input");
let checkPosition = 0;
let photoPoke = [];

const changeColor = () => {
  const arr = ["66FF99", "33FF99", "00FF99", "33CC66", "00CC66", "009933"];
  return arr[Math.floor(arr.length * Math.random())];
};

const pokemon = (event) => {
  event.preventDefault();
  const pokeSearch = searchInt.value.toLowerCase();
  searchInt.value = "";
  const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
  fetch(url + pokeSearch)
    .then((res) => res.json())
    .then((data) => {
    clearFun();
      const { name, id, height, weight, sprites, stats, types } = data;
      let i = 0;
      while (i < stats.length) {
        const { stat, base_stat } = stats[i];
        const { name } = stat;
        document.getElementById(name).innerText = base_stat;
        i++;
      }
      i = 0;
      while (i < types.length) {
        const { type } = types[i];
        const { name } = type;
        const span = document.createElement("span");
        span.setAttribute("class", "type-of-poke");
        span.style.backgroundColor = '#'+changeColor();
        span.textContent = name.toUpperCase();
        document.getElementById("types").appendChild(span);
        i++;
      }
      photoPoke = [];
      const { back_default, front_default } = sprites;
      photoPoke.push(front_default);
      photoPoke.push(back_default);
      document.getElementById("pokemon-name").innerText =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      document.getElementById("pokemon-id").innerText = "#" + id;
      document.getElementById("height").innerText = "Height: " + height;
      document.getElementById("weight").innerText = "Weight: " + weight;
      document.getElementById("for-photo").innerText = "";
      const img = document.createElement("img");
      img.setAttribute("id", "sprite");
      img.setAttribute("src", photoPoke[0]);
      img.setAttribute("alt", "Front-" + name);
      document.getElementById("for-photo").appendChild(img);
      setButtons();
      return;
    })
    .catch((err) => {
      alert("Pokémon not found");
      clearFun();
      return;
    });
};

const switchGo = () => {
  if (checkPosition === 0) {
    document.getElementById("sprite").setAttribute("src", photoPoke[1]);
    checkPosition = 1;
  } else {
    document.getElementById("sprite").setAttribute("src", photoPoke[0]);
    checkPosition = 0;
  }
};

const clearFun = () => {
console.log('yes');
  document.getElementById("pokemon-name").innerText = "";
  document.getElementById("pokemon-id").innerText = "";
  document.getElementById("height").innerText = "";
  document.getElementById("weight").innerText = "";
  document.getElementById("for-photo").innerText = "";
  document.getElementById("hp").innerText = "";
  document.getElementById("attack").innerText = "";
  document.getElementById("defense").innerText = "";
  document.getElementById("special-attack").innerText = "";
  document.getElementById("special-defense").innerText = "";
  document.getElementById("speed").innerText = "";
  document.getElementById("types").innerText = "";
};

const setButtons = () => {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "reverse-btn");
  button.innerHTML = `<img src='https://cdn-icons-png.flaticon.com/512/8110/8110056.png' />`;
  document.getElementById("for-photo").appendChild(button);
  document
    .getElementsByClassName("reverse-btn")[0]
    .addEventListener("click", switchGo);
};

searchBtn.addEventListener("click", pokemon);
