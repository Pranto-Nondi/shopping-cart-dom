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