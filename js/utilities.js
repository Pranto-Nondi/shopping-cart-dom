// get elemant for innerText
function getElement(NameId, PriceId, QuantityId, pTotal, pCount, iCount) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = getElementText(PriceId);
    const pQuantity = getElementText(QuantityId);
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

function getElementText(Id) {
    const P = parseInt(document.getElementById(Id).innerText);
    return P;

}
// get elemant for value

function getInputElemntObj(NameId, PriceId, QuantityId, pTotal, pCount, iCount) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = getInputValue(PriceId);
    const pQuantity = getInputValue(QuantityId);
    inputValueClear(PriceId);
    inputValueClear(QuantityId);

    if (pPrice < 0 || pQuantity < 0) {
        return 0;
    }
    else if (isNaN(pPrice)) {
        return 0;
    }


    else {
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

}

function getInputValue(id) {
    const p = document.getElementById(id).value;
    return p;
}




// set element every item
function setElement(pName, pPrice, pQuantity, pItemTotal, pCount, iCount, parentElement, grandTotal, grandId, allCaostId) {

    if ((pPrice <= 0) || (pItemTotal <= 0) || (grandTotal <= 0)) {
        alert("You Have Must Give Valid Data");
    }
    else if (isNaN(grandTotal)) {
        alert("You Have Must Give Valid Data");
    }

    else {
        setItemText(pCount, iCount, grandId, allCaostId, grandTotal);
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

}
// set element text
function setItemText(pCount, iCount, grandId, allCaostId, grandTotal) {
    document.getElementById(pCount).innerText = count;
    document.getElementById(iCount).innerText = count;
    document.getElementById(grandId).innerText = grandTotal;
    document.getElementById(allCaostId).innerText = grandTotal;
}


// grandTotal
function grandTotal(value) {
    allTotal = allTotal + value;
    return allTotal;
}
// button disabled
function addToCartDisable(id) {
    document.getElementById(id).setAttribute("disabled", false);
}
function inputValueClear(id) {
    document.getElementById(id).value = "";
 
}



