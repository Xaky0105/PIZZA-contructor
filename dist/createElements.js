import { pizzaWrapper } from "./constants.js";
import { acceptOrder, inputHandler, removePopup } from "./eventListener.js";
export function createIngridientsList(array, category) {
    const container = document.getElementById(`${category}-container`);
    container.textContent = '';
    array.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('ingridients');
        li.classList.add(`${category}`);
        li.textContent = `${item.price}$ - ${item.name}`;
        container.append(li);
    });
}
export function createOrderItem(name, category) {
    const container = document.getElementsByClassName('order-list')[0];
    const li = document.createElement('li');
    li.textContent = name;
    li.classList.add('order-component');
    li.classList.add(`${category}`);
    container.append(li);
}
export function createPopup() {
    const popup = document.createElement('div');
    const textContainer = document.createElement('span');
    const buttonContainer = document.createElement('div');
    const backButton = document.createElement('button');
    const acceptButton = document.createElement('button');
    const mask = document.createElement('div');
    const inputTel = document.createElement('input');
    popup.classList.add('popup');
    mask.classList.add('mask');
    buttonContainer.classList.add('button-container');
    popup.style.opacity = '0';
    setTimeout(() => popup.style.opacity = '1');
    acceptButton.disabled = true;
    inputTel.type = 'tel';
    inputTel.id = 'inputTel';
    inputTel.placeholder = '+375290000000';
    textContainer.textContent = `Для подтверждения заказа оставьте свой номер телефона`;
    backButton.textContent = 'Вернуться назад';
    acceptButton.textContent = 'Подтвердить';
    acceptButton.id = 'btn-accept';
    buttonContainer.append(backButton, acceptButton);
    pizzaWrapper.append(popup, mask);
    popup.append(textContainer, inputTel, buttonContainer);
    backButton.addEventListener('click', removePopup);
    inputTel.addEventListener('input', inputHandler);
    acceptButton.addEventListener('click', acceptOrder);
}
