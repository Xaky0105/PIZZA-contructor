import { checkFullSet } from "./checkElements.js";
import { orderState } from "./constants.js";
import { changeImage, showTotalPrice } from "./showElements.js";
import { IngridientsType, OrderInterface } from "./types.js";

export function calculatePrice(): number {
    let totalPrice: number = 0;
    const keys: string[] = Object.keys(orderState);
    keys.forEach((key) => orderState[key].forEach((item) => {
        totalPrice += item.price
    }))
    return totalPrice;
}

export function deleteActiveElements(text: string, category: string): void {
    const ingridTypeActiveNode: Element[] = Array.from(document.getElementsByClassName(`ingridients ${category} active`));
    ingridTypeActiveNode.forEach((node) => {
        if(node.textContent === text) {
            node.classList.remove('active');
        } 
    })
}

export function clearOrderState(): void {
    const keys: string[] = Object.keys(orderState);
    keys.forEach(key => orderState[key] = []);
}

export function orderFormation(state: IngridientsType, phoneNumber: string) {
    const order: OrderInterface = {
        pizza: [],
        userInfo: [],
    };
    const keys: string[] = Object.keys(state);
    keys.forEach((key) => {
        state[key].forEach((obj) => {
            order.pizza.push({name: obj.name, price: obj.price});
        })
    })
    order.userInfo.push({phone: phoneNumber});
    return order;
}

export function isAllElemDontIncludes(category: string, text: string) {
    return orderState[category].every((item) => !text.includes(item.name));
}


export function rerenderPriceAndImage() {
    const currentPrice: number = calculatePrice();
    showTotalPrice(currentPrice);
    const orderStep: number = checkFullSet();
    changeImage(orderStep);
}
