//  click handeler  every item
let count = 0;
document.getElementById("first-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("cofee-name", "cofee-price", "coffee-quantity", "coffeTotal","items-count","products-count");
    const parentElement = document.getElementById("parent");
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, getElemntObj.productsCount,getElemntObj.itemsCount, parentElement);
    const grandTotal=getElemntObj.productItemTotal

})
document.getElementById("second-btn").addEventListener("click", function () {
    count += 1;
    const getElemntObj = getElement("heart-name", "heart-price", "heart-quantity", "heartTotal","items-count","products-count");
    const parentElement = document.getElementById("parent");
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal,getElemntObj.productsCount,getElemntObj.itemsCount, parentElement);
})
document.getElementById("vue-btn").addEventListener("click", function () {
    count += 1;
    const getElementObj = getInputElemntObj("vue-name", "first-input", "second-input", "vueTotal","items-count","products-count");
    const parentElement = document.getElementById("parent");
    setElement(getElementObj.poductName, getElementObj.productPrice, getElementObj.productQuantity, getElementObj.productItemTotal,getElemntObj.productsCount,getElemntObj.itemsCount, parentElement);
})

// get elemant for innerText
function getElement(NameId, PriceId, QuantityId,pTotal,pCount,iCount) {
console.log(NameId, PriceId, QuantityId,pCount,iCount);
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
        productsCount:pCount,
        itemsCount:iCount,
    }
    console.log(itemObj);
    return itemObj;
}
// get elemant for value

function getInputElemntObj(NameId, PriceId, QuantityId, pTotal,pCount,iCount) {
   console.log(NameId, PriceId, QuantityId, pTotal,pCount,iCount);
    const pName = document.getElementById(NameId).innerText;
    const pPrice = document.getElementById(PriceId).value;
    const pQuantity = document.getElementById(QuantityId).value;
    pTotal = (parseInt(pPrice) - parseInt(pQuantity));
    console.log(pName, pPrice, pQuantity, pTotal);

    const itemObj = {
        poductName: pName,
        productPrice: pPrice,
        productQuantity: pQuantity,
        productItemTotal: pTotal,
        productsCount:pCount,
        itemsCount:iCount,
    }
    return itemObj;
}

// set element every item
function setElement(pName, pPrice, pQuantity, pItemTotal, pCount,iCount, parentElement) {
    console.log(pName, pPrice, pQuantity, pItemTotal, pCount, parentElement);
    document.getElementById(pCount).innerText= count;
    document.getElementById(iCount).innerText= count;
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