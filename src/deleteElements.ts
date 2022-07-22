import { deleteActiveElements, calculatePrice } from "./utils.js";
import { changeImage, showTotalPrice } from "./showElements.js";
import { checkFullSet } from "./checkElements.js";
import { orderList } from "./constants.js";

export function deleteOrderItem(text: string, category: string, target: HTMLLIElement): void{
    orderList.removeChild(target);
    deleteActiveElements(text, category)
    const currentPrice = calculatePrice()
    showTotalPrice(currentPrice);
    const orderStep: number = checkFullSet()
    changeImage(orderStep)
}

export function deleteAllOrderItems(): void {
    orderList.textContent = '';
    const currentPrice = calculatePrice()
    showTotalPrice(currentPrice);
}