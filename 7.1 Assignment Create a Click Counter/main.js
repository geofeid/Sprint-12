//Initilazation
let count = 0;

//Click btn
const clickBtn = document.getElementById("clickBtn");

//Total clicks
const totalClicks = document.getElementById("totalClicks");

//Onclick events
clickBtn.onclick = function () {
    count++;
    totalClicks.innerHTML = count;
  };
  resetBtn.onclick = function () {
    count = 0;
    totalClicks.innerHTML = count;
  };