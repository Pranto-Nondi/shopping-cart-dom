//  click handeler  every item
document.getElementById("first-btn").addEventListener("click", function () {
    const getElemntObj = getElement("cofee-name", "cofee-price", "coffee-quantity", "coffeTotal");
    const parentElement = document.getElementById("parent");
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, parentElement);
})
document.getElementById("second-btn").addEventListener("click", function () {
    const getElemntObj = getElement("heart-name", "heart-price", "heart-quantity", "heartTotal");
    const parentElement = document.getElementById("parent");
    setElement(getElemntObj.poductName, getElemntObj.productPrice, getElemntObj.productQuantity, getElemntObj.productItemTotal, parentElement);
})
document.getElementById("vue-btn").addEventListener("click", function () {
    const getElementObj = getInputElemntObj("vue-name", "first-input", "second-input", "vueTotal");
    const parentElement = document.getElementById("parent");
    setElement(getElementObj.poductName, getElementObj.productPrice, getElementObj.productQuantity, getElementObj.productItemTotal, parentElement);
})

// get elemant for innerText
function getElement(NameId, PriceId, QuantityId, pTotal) {

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
        productItemTotal: pTotal
    }
    return itemObj;
}
// get elemant for value

function getInputElemntObj(NameId, PriceId, QuantityId, pTotal) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = document.getElementById(PriceId).value;
    const pQuantity = document.getElementById(QuantityId).value;
    pTotal = (parseInt(pPrice) - parseInt(pQuantity));
    console.log(pName, pPrice, pQuantity, pTotal);

    const itemObj = {
        poductName: pName,
        productPrice: pPrice,
        productQuantity: pQuantity,
        productItemTotal: pTotal
    }
    return itemObj;
}

// set element every item
function setElement(pName, pPrice, pQuantity, pItemTotal, parentElement) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>1</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${pItemTotal}</td>
    `
    parentElement.appendChild(tr);
}