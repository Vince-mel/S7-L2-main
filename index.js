//------------------------- ESERCIZIO 1 ------------------------//

const input = document.getElementById("nameInput");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const h1 = document.getElementById("myH1");
const myKey = "myKey";
const timerKey = "timerKey";
const save = () => {
  localStorage.setItem(myKey, input.value);
  h1.innerText = `Hello, ${input.value}`;
  input.value = "";
};
saveBtn.addEventListener("click", save);

const load = () => {
  const oldValue = localStorage.getItem(myKey);
  input.value = oldValue;
};
loadBtn.addEventListener("click", load);

//------------------------ ESERCIZIO 2 ------------------------//
const timeSpan = document.getElementById("timer");
const savedTime = sessionStorage.getItem(timerKey);
let timerValue = savedTime;
timeSpan.innerText = timerValue;
const updateTimer = () => {
  timerValue++;
  timeSpan.innerText = timerValue;
  sessionStorage.setItem(timerKey, timerValue);
};

const timerInterval = setInterval(updateTimer, 1000);
