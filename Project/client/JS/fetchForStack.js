
window.onload = function updatedstack() {
fetch('http://localhost:5000/MyStack')
  .then((response) => {
    return response.json();
  })
  .then((OrderStack) => {
    let FirstArrayProduct = OrderStack[0]
    let SecondArrayProduct = OrderStack[1]
    let ThirdArrayProduct = OrderStack[2]
    let FourthArrayProduct = OrderStack[3]
    let FirstAmount = FirstArrayProduct[1]
    let SecondAmount = SecondArrayProduct[1]
    let ThirdAmount = ThirdArrayProduct[1]
    let FourthAmount = FourthArrayProduct[1]
    document.getElementById(1).innerHTML = FirstArrayProduct[0];
    document.getElementById(5).innerHTML = SecondArrayProduct[0];
    document.getElementById(9).innerHTML = ThirdArrayProduct[0];
    document.getElementById(13).innerHTML = FourthArrayProduct[0];
    document.getElementById(4).innerHTML = FirstAmount;
    document.getElementById(8).innerHTML = SecondAmount;
    document.getElementById(12).innerHTML = ThirdAmount;
    document.getElementById(16).innerHTML = FourthAmount;
    
  });
}

