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
    if (target.nodeName === 'LI') {
        const text = target.textContent;
        const nameWithoutOtherSymbols = text.split('- ')[1];
        const category = target.parentNode.id.split('-')[0];
        if (isAddIngridients(category, text)) {
            Object.keys(Categories).forEach((categoryName) => {
                if (category === categoryName) {
                    const component = ingr[category].filter((item) => item.name === nameWithoutOtherSymbols);
                    orderState[category].push(...component);
                }
            });
            createOrderItem(text, category);
            rerenderPriceAndImage();
            target.classList.add('active');
        }
    }
}
export function deleteItemFromOrderList({ target }) {
    const targetElem = target;
    const text = target.textContent;
    const category = target.classList[1];
    let indexElem = 0;
    switch (category) {
        case Categories.main:
            orderState.main.forEach(({ name }, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            });
            orderState.main.splice(indexElem, 1);
            deleteOrderItem(text, category, targetElem);
            break;
        case Categories.meat:
            orderState.meat.forEach(({ name }, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            });
            orderState.meat.splice(indexElem, 1);
            deleteOrderItem(text, category, targetElem);
            break;
        case Categories.sauce:
            orderState.sauce.forEach(({ name }, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            });
            orderState.sauce.splice(indexElem, 1);
            deleteOrderItem(text, category, targetElem);
            break;
        case Categories.vegetables:
            orderState.vegetables.forEach(({ name }, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            });
            orderState.vegetables.splice(indexElem, 1);
            deleteOrderItem(text, category, targetElem);
            break;
    }
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
