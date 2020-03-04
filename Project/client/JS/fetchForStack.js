
let SerialNumberStackArray = 1
let SerialNumberAmount = 4
window.onload = function updatedstack() {

fetch('http://localhost:5000/MyStack')
.then (res => res.json())
.then(StackItems => {
  StackItems.forEach((Item) => {
  let Product = Item[0]
  let Amount = Item[1] 
  let Price = Item[2]
  document.getElementById(SerialNumberStackArray).innerHTML = Product
  SerialNumberStackArray = SerialNumberStackArray + 4
  
  document.getElementById(SerialNumberAmount).innerHTML = Amount;
  SerialNumberAmount =  SerialNumberAmount + 4
  })})}
