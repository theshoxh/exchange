
var usdDollarObj = document.querySelector("#USD");
var EuroObj = document.querySelector("#EUR");
var uzsSumObj = document.querySelector("#UZS");
var changeCurrent = document.querySelector("#change");
var resetSite = document.querySelector("#reset");
var convertCur = document.querySelector("#convert");
var info = document.querySelector("#list");
var curr = document.querySelector("#currency");
var uzs = document.querySelector("#uzs");
var curr1 = document.querySelector("#currency1");


// var usdDollar = usdDollarObj.value;
// var uzsEur = EuroObj.value;
// var uzsSum = uzsSumObj.value;

// console.log(usdDollar);
// console.log(uzsEur);
// console.log(uzsSum);

// usdDollarObj.value = usdDollar;
// EuroObj.value = uzsEur;
// uzsSumObj.value = uzsSum;


convertCur.addEventListener("click", (b) => {
  if (usdDollarObj.value != "") {
    var x = usdDollarObj.value * curr.textContent;
    x = Math.abs(x);
    console.log(x);
    uzsSumObj.value = x;
  } else {
    var y = uzsSumObj.value / 11400;
    y = Math.abs(y);
    console.log(y);
    usdDollarObj.value = y;
  }

  

  if (EuroObj.value != "") {
    var z = EuroObj.value * uzs.textContent;
    z = Math.abs(z);
    console.log(z);
    uzsSumObj.value = z;

    var j = EuroObj.value * 1.08;
    j = Math.abs(j);
    console.log(j);
    usdDollarObj.value = j;
  } else {
    var y = uzsSumObj.value / 12300;
    y = Math.abs(y);
    console.log(y);
    EuroObj.value = y;
  }

  var p1 = "";
  var p2 = "";
  var p3 = "";

  if (p1 == "" && p2 == "" && p3 == "") {
    var newLi = document.createElement("li");

    var par1 = document.createElement("p");
    par1.textContent = `So'mda: ${uzsSumObj.value} so'm`;

    var par2 = document.createElement("p");
    par2.textContent = `Dollarda: ${usdDollarObj.value} $`;

    var par3 = document.createElement("p");
    par3.textContent = `Yevroda: ${EuroObj.value}` + " €";

    newLi.append(par1, par2, par3);
    info.appendChild(newLi);
  }

})

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var natija = curr.textContent;

var natija1 = uzs.textContent;

resetSite.addEventListener("click", (c) => {
  usdDollarObj.value = "";
  uzsSumObj.value = "";
  EuroObj.value = "";

  uzs.textContent = randomIntFromInterval(12000, 13000);
  curr.textContent = randomIntFromInterval(10000, 12000);
})

