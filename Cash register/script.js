const purchaseBtn = document.getElementById("purchase-btn");
const changeDiv = document.getElementById("change-due");
const cash = document.getElementById("cash");
const nowCid = document.getElementsByClassName("now-cid");

let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
const now = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

const changeCid = () => {
  let i = 0;
  while (i < cid.length) {
    const resultElement = document.createElement("p");
    resultElement.textContent = `${cid[i][0]}: $${parseFloat(
      cid[i][1].toFixed(2)
    )}`;
    resultElement.classList.add("result-now-cid");
    nowCid[0].appendChild(resultElement);
    i++;
  }
};
changeCid();

const getCash = () => {
  const numCash = Number(cash.value);
  if (numCash < price) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = "";
    return;
  } else if (numCash === price) {
    changeDiv.innerHTML =
      '<p class="error-result">No change due - customer paid with exact cash</p>';
    cash.value = "";
    return;
  }

  changeDiv.textContent = "";
  let newNum = parseFloat((numCash - price).toFixed(2));

  if (parseFloat(cid.reduce((acc, e) => acc + e[1], 0).toFixed(2)) < newNum) {
    changeDiv.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
    cash.value = "";
    return;
  }

  let changeGiven = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    let coinValue = now[i];
    let coinName = cid[i][0];
    let availableAmount = cid[i][1];
    let amountToGive = 0;

    while (newNum >= coinValue && availableAmount > 0) {
      newNum = parseFloat((newNum - coinValue).toFixed(2));
      availableAmount -= coinValue;
      amountToGive += coinValue;
    }

    if (amountToGive > 0) {
      changeGiven.push(`${coinName}: $${parseFloat(amountToGive.toFixed(2))}`);
      cid[i][1] -= amountToGive;
    }
  }

  if (newNum > 0) {
    changeDiv.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
  } else {
    if (cid.reduce((acc, e) => acc + e[1], 0).toFixed(0) > 0) {
      changeDiv.innerHTML = "<p>Status: OPEN</p>";
    } else {
      changeDiv.innerHTML = "<p>Status: CLOSED</p>";
      purchaseBtn.style.display = "none";
    }
    changeGiven.forEach((item) => {
      const resultElement = document.createElement("p");
      resultElement.textContent = item;
      resultElement.classList.add("result-text");
      changeDiv.appendChild(resultElement);
    });
  }

  nowCid[0].textContent = "";
  changeCid();
  cash.value = "";
};

purchaseBtn.addEventListener("click", getCash);
