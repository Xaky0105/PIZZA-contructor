import { checkFullSet } from "./checkElements.js";
import { orderState } from "./constants.js";
import { changeImage, showTotalPrice } from "./showElements.js";
export function calculatePrice() {
    let totalPrice = 0;
    const keys = Object.keys(orderState);
    keys.forEach((key) => orderState[key].forEach((item) => {
        totalPrice += item.price;
    }));
    return totalPrice;
}
export function deleteActiveElements(text, category) {
    const ingridTypeActiveNode = Array.from(document.getElementsByClassName(`ingridients ${category} active`));
    ingridTypeActiveNode.forEach((node) => {
        if (node.textContent === text) {
            node.classList.remove('active');
        }
    });
}
export function clearOrderState() {
    const keys = Object.keys(orderState);
    keys.forEach(key => orderState[key] = []);
}
export function orderFormation(state, phoneNumber) {
    const order = {
        pizza: [],
        userInfo: [],
    };
    const keys = Object.keys(state);
    keys.forEach((key) => {
        state[key].forEach((obj) => {
            order.pizza.push({ name: obj.name, price: obj.price });
        });
    });
    order.userInfo.push({ phone: phoneNumber });
    return order;
}
export function isAllElemDontIncludes(category, text) {
    return orderState[category].every((item) => !text.includes(item.name));
}
export function rerenderPriceAndImage() {
    const currentPrice = calculatePrice();
    showTotalPrice(currentPrice);
    const orderStep = checkFullSet();
    changeImage(orderStep);
}
