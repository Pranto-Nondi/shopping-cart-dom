// get elemant for innerText
function getElement(NameId, PriceId, QuantityId, pTotal, pCount, iCount) {

    const pName = document.getElementById(NameId).innerText;
    const pPrice = parseInt(document.getElementById(PriceId).innerText);
    const pQuantity = parseInt(document.getElementById(QuantityId).innerText);
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
    const pPrice = (document.getElementById(PriceId).value);
    const pQuantity = (document.getElementById(QuantityId).value);
    inputValueClear(PriceId,QuantityId);

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

// set element every item
function setElement(pName, pPrice, pQuantity, pItemTotal, pCount, iCount, parentElement, grandTotal, grandId, allCaostId) {

    if ((pPrice <= 0) || (pItemTotal <= 0) || (grandTotal <= 0)) {
        alert("You Have Must Give Valid Data");
    }
    else if (isNaN(grandTotal)) {
        alert("You Have Must Give Valid Data");
    }

    else {
        document.getElementById(pCount).innerText = count;
        document.getElementById(iCount).innerText = count;
        document.getElementById(grandId).innerText = grandTotal;
        document.getElementById(allCaostId).innerText = grandTotal;
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

// grandTotal
function grandTotal(value) {
    allTotal = allTotal + value;
    return allTotal;
}
// button disabled
function addToCartDisable(id) {
    document.getElementById(id).setAttribute("disabled", false);
}
function inputValueClear(id1,id2) {
    document.getElementById(id1).value = "";
    document.getElementById(id2).value = "";
}