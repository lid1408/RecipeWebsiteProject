let updatedAmount = []
let updatedPrice = 0 
let UpdatedStackLeft = ''
let totalPrice = 0
let StackRight = ''

const SearchFunc = () => {
    var input, filter, ul, li, a, i, txtValue ,b ;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

const Delivary = () => {
    flag = true
    let Remember = document.getElementById("check")
    if (Remember.checked) {
        alert("Great, your order will be deliver to you in the chosen time")
    }
    else {
        alert("please check a checked box")
    }
    
}
let updatedCart = ''
const GeneralFuncForCartPage = (x) => {
    let product = String(document.getElementById(x).innerHTML)    
    let price = Number(document.getElementById(x+1).innerHTML)
    let amount = Number(document.getElementById(x+2).value)
    let InStack = Number(document.getElementById(x+3).innerHTML)
    console.log(InStack);
    
    
    updatedCart = product + "," + updatedCart
    totalPrice = (parseInt(amount) * parseInt(price)) + totalPrice
    
    if (InStack < amount) {
        document.getElementById(x+2).value = ""
        alert( " The Amount Wanted Is Not Available ")
    }
    if (InStack >= amount) {
        let StackLeft = parseInt( parseInt(InStack) - parseInt(amount) )
        document.getElementById("AMOUNT").value = StackLeft
        document.getElementById('price').value = totalPrice; 
        document.getElementById("productNAME").value = updatedCart;
        document.getElementById("MyCart").innerHTML = updatedCart;
        document.getElementById("item").innerHTML = updatedCart;
        UpdatedStackLeft = StackLeft + ',' + UpdatedStackLeft
        let LenStack = UpdatedStackLeft.length
        StackRight = InStack + ',' + StackRight
        if (LenStack<=4) {
        document.getElementById("NewStack").value = StackLeft;
        document.getElementById("INStack").value = InStack;
        }
        if (LenStack>4) { 
        document.getElementById("NewStack").value = UpdatedStackLeft;
        //document.getElementById("INStack").value = InStack;
        document.getElementById("AmountIn").value = StackRight;
        console.log(UpdatedStackLeft)
        //console.log(InStack)
        console.log(StackRight)
        }
    }
}

const ToggleCheckoutForm = () => {
    document.getElementById("panel").style.display = "block"; 
}

const ID = () => {
    var id = ( '_' + Math.random().toString(36).substr(2, 9));
    document.getElementById('id').value = id;
    return id 
};

const operator = () => {
    ToggleCheckoutForm()
    ID()
    
}

const YearCheckValid = () =>{
    let thisYear = new Date().getFullYear()
    let typedYear = document.getElementById("expyear").value
    if (thisYear > typedYear) {
        document.getElementById("expyear").value = ""
    }
}
