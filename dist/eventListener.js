import { orderState, ingr } from "./constants.js";
import { createOrderItem } from "./createElements.js";
import { clearOrderState, orderFormation, rerenderPriceAndImage } from "./utils.js";
import { isAddIngridients, checkFullSet } from "./checkElements.js";
import { changeImage, showSuccessfulSubmission } from "./showElements.js";
import { deleteAllOrderItems, deleteOrderItem } from "./deleteElements.js";
import { renderIngridients } from "./index.js";
import { validatePhone } from "./validate.js";
import { Categories } from "./types.js";
export function addItemToOrderList({ target }) {
    const targetElem = target;
    if (targetElem.nodeName === 'LI') {
        const text = targetElem.textContent;
        const nameWithoutOtherSymbols = text.split('- ')[1];
        const parentElem = targetElem.parentNode;
        const category = parentElem.id.split('-')[0];
        if (isAddIngridients(category, text)) {
            Object.keys(Categories).forEach((categoryName) => {
                if (category === categoryName) {
                    const component = ingr[category].filter((item) => item.name === nameWithoutOtherSymbols);
                    orderState[category].push(...component);
                }
            });
            createOrderItem(text, category);
            rerenderPriceAndImage();
            targetElem.classList.add('active');
        }
    }
}
export function deleteItemFromOrderList({ target }) {
    const targetElem = target;
    const text = targetElem.textContent;
    const category = targetElem.classList[1];
    let indexElem = 0;
    Object.keys(Categories).forEach((categoryName) => {
        if (categoryName === category) {
            orderState[category].forEach(({ name }, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            });
            orderState[category].splice(indexElem, 1);
            deleteOrderItem(text, category, targetElem);
        }
    });
}
export function removePopup() {
    const popup = document.getElementsByClassName('popup')[0];
    const mask = document.getElementsByClassName('mask')[0];
    popup.remove();
    mask.remove();
}
export function acceptOrder() {
    const inputTel = document.getElementById('inputTel');
    const tel = inputTel.value;
    const order = orderFormation(orderState, tel);
    console.log(order);
    showSuccessfulSubmission();
    removePopup();
    renderIngridients();
    clearOrderState();
    deleteAllOrderItems();
    const number = checkFullSet();
    changeImage(number);
}
export function inputHandler() {
    const inputTel = document.getElementById('inputTel');
    const acceptButton = document.getElementById('btn-accept');
    if (validatePhone(inputTel.value)) {
        acceptButton.disabled = false;
    }
    else {
        acceptButton.disabled = true;
    }
}
