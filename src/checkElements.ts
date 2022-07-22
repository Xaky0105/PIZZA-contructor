import { orderState, buttonOrder } from "./constants.js";
import { Categories } from "./types.js";

export function checkFullSet(): number {
    let stepOrder: number = 0;
    for (let key in orderState) {
        if (key === Categories.main) {
            stepOrder += orderState[key].length === 1 ? 1 : 0
        }
        if (key === Categories.meat) {
            stepOrder += orderState[key].length !== 0 && orderState[key].length <= 2 ? 1 : 0
        }
        if (key === Categories.sauce) {
            stepOrder += orderState[key].length === 1 ? 1 : 0
        }
        if (key === Categories.vegetables) {
            stepOrder += orderState[key].length !== 0 && orderState[key].length <= 2 ? 1 : 0
        }
    }
    if (stepOrder === 4) {
        buttonOrder.removeAttribute('disabled');
    } else {
        buttonOrder.setAttribute('disabled', 'true');
    }
    return stepOrder;
}

export function isAddIngridients(category: string, text: string): boolean {
    switch (category) {
        case Categories.main:
            return orderState.main.length === 0 ? true : false
        case Categories.meat:
            return orderState.meat.length < 2 && orderState.meat.find((item)=> item.name === text) === undefined ? true : false
        case Categories.sauce:
            return orderState.sauce.length === 0 ? true : false
        case Categories.vegetables:
            return orderState.vegetables.length < 2 && orderState.vegetables.find((item) => item.name === text) === undefined ? true : false
        default:
            return false;
    }
}