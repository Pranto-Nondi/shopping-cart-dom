//  click handeler  every item
let count = 0;
let allTotal = 0;
document.getElementById("first-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("cofee-name", "cofee-price", "coffee-quantity", "coffeTotal", "items-count", "products-count");
    if (isNaN(getElemntObj.productItemTotal)) {
        alert("invalid data");
    }
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total", "all-coast");
    addToCartDisable("first-btn");
})
document.getElementById("second-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("heart-name", "heart-price", "heart-quantity", "heartTotal", "items-count", "products-count");
    if (isNaN(getElemntObj.productItemTotal)) {
        alert("invalid data");
    }
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total", "all-coast");
    addToCartDisable("second-btn");
})
document.getElementById("vue-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getInputElemntObj("vue-name", "first-input", "second-input", "vueTotal", "items-count", "products-count");
    if (isNaN(getElemntObj.productItemTotal)) {
        alert("invalid data");
    }
    else if (getElemntObj.productItemTotal <= 0) {
        alert("invalid data");
    }
    else {
        const parentElement = document.getElementById("parent");
        const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
        setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total", "all-coast");
        addToCartDisable("vue-btn");
    }

})

document.getElementById("apply-btn").addEventListener("click", function () {
    const promoCodeValue = getInputValue("promo-input-field");
    inputValueClear("promo-input-field");
    if (promoCodeValue === "101") {
        const allCoast = document.getElementById("all-coast").innerText;
        const discount = allCoast * 0.2;
        const allTotalCoast = allCoast - discount;
        if (allCoast <= 0 || allTotalCoast <= 0) {
            alert("You loast your Discount for Nothing to Add");
            addToCartDisable("apply-btn");
        }
        else {
            document.getElementById("all-coast").innerText = allTotalCoast;
            addToCartDisable("apply-btn");
        }

    }
    else {
        alert("You loast your Discount");
        addToCartDisable("apply-btn");
    }
})

