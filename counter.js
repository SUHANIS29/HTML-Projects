document.getElementById("increase").addEventListener("click",increaseCount);
document.getElementById("decrease").addEventListener("click",decreaseCount);
document.getElementById("Reset").addEventListener("click",resetCount);
let counterDisplay=document.getElementById("counterDisplay");
let counterValue=0;
function updateCounterDisplay(){
  counterDisplay.textContent=counterValue;
}
function increaseCount(){
counterValue++;
updateCounterDisplay();
}
function decreaseCount(){
counterValue--;
updateCounterDisplay();
}
function resetCount(){
counterValue=0;
updateCounterDisplay();
}
