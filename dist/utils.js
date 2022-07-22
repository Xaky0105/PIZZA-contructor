import { orderState } from "./constants.js";
export function calculatePrice() {
    let totalPrice = 0;
    for (let key in orderState) {
        orderState[key].forEach((item) => totalPrice += item.price);
    }
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
    for (let key in orderState) {
        orderState[key] = [];
    }
}
export function orderFormation(state, phoneNumber) {
    const order = {
        pizza: [],
        userInfo: [],
    };
    for (let key in state) {
        state[key].forEach((obj) => {
            order.pizza.push({ name: obj.name, price: obj.price });
        });
    }
    order.userInfo.push({ phone: phoneNumber });
    return order;
}
