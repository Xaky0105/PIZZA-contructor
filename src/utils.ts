import { orderState } from "./constants.js";
import { IngridientsItemType, IngridientsType, OrderInterface } from "./types.js";

export function calculatePrice(): number {
    let totalPrice: number = 0;
    for(let key in orderState) {
        orderState[key].forEach((item: IngridientsItemType) => totalPrice += item.price);
    }
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
    for (let key in orderState) {
        orderState[key] = [];
    }
}

export function orderFormation(state: IngridientsType, phoneNumber: string) {
    const order: OrderInterface = {
        pizza: [],
        userInfo: [],
    };
    for (let key in state) {
        state[key].forEach((obj) => {
            order.pizza.push({name: obj.name, price: obj.price});
        })
    }
    order.userInfo.push({phone: phoneNumber});
    return order;
}

