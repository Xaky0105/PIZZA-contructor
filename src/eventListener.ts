import { orderState, ingr } from "./constants.js";
import { createOrderItem } from "./createElements.js";
import { clearOrderState, orderFormation, rerenderPriceAndImage } from "./utils.js";
import { isAddIngridients, checkFullSet } from "./checkElements.js";
import { changeImage, showSuccessfulSubmission } from "./showElements.js";
import { deleteAllOrderItems, deleteOrderItem } from "./deleteElements.js";
import { renderIngridients } from "./index.js";
import { validatePhone } from "./validate.js";
import { Categories, IngridientsItemType } from "./types.js";

export function addItemToOrderList({target}: any): void { // Не знаю какой тип у Event
    if (target.nodeName === 'LI') {
        const text: string = target.textContent;
        const nameWithoutOtherSymbols = text.split('- ')[1];
        const category: string = target.parentNode.id.split('-')[0];
        if (isAddIngridients(category, text)) {
            Object.keys(Categories).forEach((categoryName) => {
                if (category === categoryName) {
                    const component: IngridientsItemType[] = ingr[category].filter((item) => item.name === nameWithoutOtherSymbols);
                    orderState[category].push(...component)
                }
            })
            createOrderItem(text, category);
            rerenderPriceAndImage()
            target.classList.add('active');
        }
    }
}

export function deleteItemFromOrderList({target}: any): void { // Не знаю какой тип у Event
    const targetElem: HTMLLIElement = target;
    const text: string = target.textContent;
    const category: string = target.classList[1];
    let indexElem: number = 0;
    switch (category) {
        case Categories.main:
            orderState.main.forEach(({name}, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            })
            orderState.main.splice(indexElem, 1)
            deleteOrderItem(text, category, targetElem);
            break
        case Categories.meat:
            orderState.meat.forEach(({name}, index) => {             
                if (text.includes(name)) {
                    indexElem = index;
                }
            })
            orderState.meat.splice(indexElem, 1)
            deleteOrderItem(text, category, targetElem);
            break
        case Categories.sauce:
            orderState.sauce.forEach(({name}, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            })
            orderState.sauce.splice(indexElem, 1)
            deleteOrderItem(text, category, targetElem);
            break
        case Categories.vegetables:
            orderState.vegetables.forEach(({name}, index) => {
                if (text.includes(name)) {
                    indexElem = index;
                }
            })
            orderState.vegetables.splice(indexElem, 1)
            deleteOrderItem(text, category, targetElem);
            break
    }
}

export function removePopup(): void {
    const popup = document.getElementsByClassName('popup')[0] as HTMLDivElement;
    const mask = document.getElementsByClassName('mask')[0] as HTMLDivElement
    popup.remove();
    mask.remove();
}

export function acceptOrder(): void {
    const inputTel = document.getElementById('inputTel') as HTMLInputElement;
    const tel: string = inputTel.value;
    const order = orderFormation(orderState, tel);
    console.log(order);
    showSuccessfulSubmission();
    removePopup();
    renderIngridients();
    clearOrderState();
    deleteAllOrderItems();
    const number: number = checkFullSet();
    changeImage(number);
}

export function inputHandler(): void {
    const inputTel = document.getElementById('inputTel') as HTMLInputElement;
    const acceptButton = document.getElementById('btn-accept') as HTMLButtonElement;
    if (validatePhone(inputTel.value)) {
        acceptButton.disabled = false
    } else {
        acceptButton.disabled = true;
    }
}