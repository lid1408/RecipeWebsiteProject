//------ defining variables ---------//
let TotalPrice = 0
let UpdatedCart = ''
let ChosenAmountS = ''
let UpdatedStackLeft = ''
let AmountInCurrentStack_ = ''
let AmountLeftAfterPurchase_ = ''
let ProductSerialNumber
//---------------------------------//
const SearchFunc = () => {
    let i, txtValue;
    let SearchInput = document.getElementById("SearchInput");
    let filter = SearchInput.value.toUpperCase();
    let ListOfRecipes = document.getElementById("myUL");
    let RecipesListItem = document.getElementsByTagName("li");
    for (i = 0; i < RecipesListItem.length; i++) {
        RecipesForComparetion = RecipesListItem[i].getElementsByTagName("p")[0];
        txtValue = RecipesForComparetion.textContent || RecipesForComparetion.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            RecipesListItem[i].style.display = "";
        } else {
            RecipesListItem[i].style.display = "none";
}}}

const Delivary = () => {
    let CheckBoxChecker = document.getElementById("check")
    if (CheckBoxChecker.checked) {
        alert("Great, your order will be deliver to you at your chosen time")
    }
    else {
        alert("please check a checked box")
    }}

const GeneralFuncForCartPage = (ProductSerialNumber) => {
    let product = String(document.getElementById(ProductSerialNumber).innerHTML)    
    let price = Number(document.getElementById(ProductSerialNumber+1).innerHTML)
    let amount = Number(document.getElementById(ProductSerialNumber+2).value)
    let AmountInCurrentStack = Number(document.getElementById(ProductSerialNumber+3).innerHTML)
    AmountInCurrentStack_ = AmountInCurrentStack + ',' + AmountInCurrentStack_
    ChosenAmountS = amount + ',' + ChosenAmountS
    //----not really needed, essential for a real websie ----//
    UpdatedCart = product + "," + UpdatedCart
    TotalPrice = (parseInt(amount) * parseInt(price)) + TotalPrice
    //-------------------------------------------------------//
    AmountLeftAfterPurchase = (parseInt(AmountInCurrentStack)-parseInt(amount))
    AmountLeftAfterPurchase_ = AmountLeftAfterPurchase + ',' + AmountLeftAfterPurchase_
    // ERROR CHECKER //
    if (AmountInCurrentStack < amount) {
        document.getElementById(x+2).value = ""
        alert( " The Amount Wanted Is Not Available ")
    }
    // ----------------- //
    if (AmountInCurrentStack >= amount) {
        // FOR CLIENTS' ACCESSIBILITY //
        document.getElementById("AmountLeftAfterPurchase").value = AmountLeftAfterPurchase
        document.getElementById('FullPrice').value = TotalPrice; 
        document.getElementById("ChosenProductName").value = UpdatedCart;
        document.getElementById("MyCart").innerHTML = UpdatedCart;
        // ------------------------ //
        // FOR SERVER //
        document.getElementById("ChosenAmount/s").innerHTML = ChosenAmountS;
        document.getElementById("AmountLeftAfterPurchase").value = AmountLeftAfterPurchase_;
        document.getElementById("AmountInStack").value = AmountInCurrentStack_;
        // -------- // 
    }}

const ToggleCheckoutForm = () => {
    document.getElementById("panel").style.display = "block"; 
}

const IDCreator = () => {
    var id = ( '_' + Math.random().toString(36).substr(2, 9));
    document.getElementById('id').value = id;
    return id 
};

const operator = () => {
    ToggleCheckoutForm()
    IDCreator()   
}

const YearCheckValid = () =>{
    let thisYear = new Date().getFullYear()
    let typedYear = document.getElementById("expyear").value
    if (thisYear > typedYear) {
        document.getElementById("expyear").value = ""
    }}
