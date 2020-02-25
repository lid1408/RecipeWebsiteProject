
window.onload = function updatedstack() {
fetch('http://localhost:5000/MyStack')
  .then((response) => {
    return response.json();
  })
  .then((OrderStack) => {
    FirstArrayProduct = OrderStack[0]
    SecondArrayProduct = OrderStack[1]
    ThirdArrayProduct = OrderStack[2]
    FourthArrayProduct = OrderStack[3]
    FirstAmount = FirstArrayProduct[1]
    SecondAmount = SecondArrayProduct[1]
    ThirdAmount = ThirdArrayProduct[1]
    FourthAmount = FourthArrayProduct[1]
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

