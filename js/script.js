let counter01 = document.getElementById("counter01");
let counter02 = document.getElementById("counter02");
let counter03 = document.getElementById("counter03");
let counter04 = document.getElementById("counter04");

let count01 = 0;
let count02 = 0;
let count03 = 0;
let count04 = 0;

function count01js() {
  count01++;
  counter01.innerText = count03;
  if (count01 == 70) {
    clearInterval(x);
  }
}

let x = setInterval(() => {
  count01js();
}, 50);

// =====
function count02js() {
  count02++;
  counter02.innerText = count02;
  if (count02 == 24) {
    clearInterval(y);
  }
}
let y = setInterval(() => {
  count02js();
}, 80);
// =====
function count03js() {
  count03++;
  counter03.innerText = count03;
  if (count03 == 70) {
    clearInterval(z);
  }
}
let z = setInterval(() => {
  count03js();
}, 30);
// =====
function count04js() {
  count04++;
  counter04.innerText = count04;
  if (count04 == 10) {
    clearInterval(xyz);
  }
}
let xyz = setInterval(() => {
  count04js();
}, 80);

