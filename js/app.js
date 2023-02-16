//  click handeler  every item
let count = 0;
let allTotal = 0;
document.getElementById("first-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("cofee-name", "cofee-price", "coffee-quantity", "coffeTotal", "items-count", "products-count");
    const parentElement = document.getElementById("parent");
    const grandAllTotal = grandTotal(getElemntObj.productItemTotal);
    console.log(grandAllTotal);
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
    console.log(grandAllTotal);
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount, getElemntObj.itemsCount, parentElement, grandAllTotal, "grand-total");
})

// get elemant for innerText
function getElement(NameId, PriceId, QuantityId, pTotal, pCount, iCount) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = document.getElementById(PriceId).innerText;
    const pQuantity = document.getElementById(QuantityId).innerText;
    if (pName === "Coffee Js") {
        pTotal = parseInt(pQuantity) * 110;
    }
    else if (pName === "Heart Js") {
        pTotal = parseInt(pQuantity) + 200;
    }

    const itemObj = {
        poductName: pName,
        productPrice: pPrice,
        productQuantity: pQuantity,
        productItemTotal: pTotal,
        productsCount: pCount,
        itemsCount: iCount,
    }
    return itemObj;
}
// get elemant for value

function getInputElemntObj(NameId, PriceId, QuantityId, pTotal, pCount, iCount) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = document.getElementById(PriceId).value;
    const pQuantity = document.getElementById(QuantityId).value;
    pTotal = (parseInt(pPrice) - parseInt(pQuantity));


    const itemObj = {
        poductName: pName,
        productPrice: pPrice,
        productQuantity: pQuantity,
        productItemTotal: pTotal,
        productsCount: pCount,
        itemsCount: iCount,
    }
    return itemObj;
}

// set element every item
function setElement(pName, pPrice, pQuantity, pItemTotal, pCount, iCount, parentElement, grandTotal, grandId) {

    document.getElementById(pCount).innerText = count;
    document.getElementById(iCount).innerText = count;
    document.getElementById(grandId).innerText = grandTotal;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${pItemTotal}</td>
    `
    parentElement.appendChild(tr);
}

// grandTotal
function grandTotal(value) {
    allTotal = allTotal + value;
    return allTotal;
}