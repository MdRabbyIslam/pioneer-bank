//* event hander buttons
const submitBtn = document.querySelector("#submit-button");
const depositBtn = document.querySelector("#deposit-btn");
const withdrawBtn = document.querySelector("#withdraw-btn");

// todo removing login area and adding transection area by clicking submitbtn;
const loginArea = document.querySelector(".login-container");
const transectionArea = document.querySelector(".transection-container");

submitBtn.addEventListener("click", () => {
  loginArea.style.display = "none";
  transectionArea.style.display = "block";
});

//*some essential function

//todo this function converting input value string to number
function inputToNumber(input) {
  const amount = input.value;
  const amountNumber = parseInt(amount);
  return amountNumber;
}

//todo this function update span amount
function updateSpan(id, amountInput) {
  const currentAmount_span = document.getElementById(id);
  const amountNumber_span = parseInt(currentAmount_span.innerText);
  currentAmount_span.innerHTML = amountNumber_span + amountInput;
  return currentAmount_span;
}

//todo deposit button handling
depositBtn.addEventListener("click", () => {
  const dipositInput = document.querySelector("#deposit-input");

  //*converting input value string  to number
  const dipositNumber = inputToNumber(dipositInput);

  //*update current deposit
  updateSpan("currentDiposit", dipositNumber);

  //*updat current balance
  updateSpan("currentBalance", dipositNumber);

  //*value input deyar por deposit btn e click korle jeno value empty hoye jay
  dipositInput.value = "";
});

//todo withdraw event handler
withdrawBtn.addEventListener("click", () => {
  const withdrawInput = document.querySelector("#withdraw-input");

  //* converting ipute value string to number
  const withdrawNumber = inputToNumber(withdrawInput);

  //* update current withdraw
  updateSpan("currentWithdraw", withdrawNumber);

  //* update current balance
  updateSpan("currentBalance", -1 * withdrawNumber);

  //*value input deyar por deposit btn e click korle jeno value empty hoye jay
  withdrawInput.value = "";
});
