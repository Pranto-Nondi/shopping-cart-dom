//  click handeler  every item
let count = 0;
let allTotal = 0;
document.getElementById("first-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("cofee-name", "cofee-price", "coffee-quantity", "coffeTotal", "items-count", "products-count");
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total");

})
document.getElementById("second-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("heart-name", "heart-price", "heart-quantity", "heartTotal", "items-count", "products-count");
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total");
})
document.getElementById("vue-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getInputElemntObj("vue-name", "first-input", "second-input", "vueTotal", "items-count", "products-count");
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total");
})

