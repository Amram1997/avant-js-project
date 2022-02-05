document
  .querySelector("#deposit-form")
  .addEventListener("submit", function (e) {
    document.querySelector("#results").style.display = "none";
    document.querySelector("#loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault(0);
    0;
  });

function calculateResults() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const earnedInterest = document.getElementById("earned-interest");
  const incomeTax = document.getElementById("income-tax");
  const repayAmount = document.getElementById("repay-amount");
  const selectedInterest = document.getElementById("interest-select");
  const selectedLegalStatus = document.getElementById("legalStatus");

  const principle = parseFloat(amount.value);
  const period = parseFloat(years.value);
  const calculatedInterest = function () {
    let res = 0;
    let p = principle;
    let r = parseFloat(interest.value) / 100;
    let n = 12;
    let t = years.value;
    if (selectedInterest.value == "compInt") {
      res = p * (1 + r / n) ** (n * t) - p;
      return res;
    } else {
      res = (parseFloat(interest.value) / 100) * period * principle;
      return res;
    }
  };

  const calculatedIncomeTax = function () {
    let res = 0;
    if (selectedLegalStatus.value == "No") {
      res = parseFloat(calculatedInterest()) * 0.1;
      return res;
    } else {
      res = 0;
      return res;
    }
  };
  const calculatedRepayAmount = parseFloat(
    principle + calculatedInterest() - calculatedIncomeTax()
  );

  if (isFinite(calculatedRepayAmount)) {
    earnedInterest.value = calculatedInterest().toFixed(2);
    incomeTax.value = calculatedIncomeTax().toFixed(2);
    repayAmount.value = calculatedRepayAmount.toFixed(2);

    document.querySelector("#results").style.display = "block";
    document.querySelector("#loading").style.display = "none";
  } else {
    showError("Please check your inputs");
  }
}

function showError(error) {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";

  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
