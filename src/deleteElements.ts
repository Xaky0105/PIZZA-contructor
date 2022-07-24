import { deleteActiveElements, calculatePrice, rerenderPriceAndImage } from "./utils.js";
import { showTotalPrice } from "./showElements.js";
import { orderList } from "./constants.js";

export function deleteOrderItem(text: string, category: string, target: HTMLLIElement): void{
    orderList.removeChild(target);
    deleteActiveElements(text, category);
    rerenderPriceAndImage();
}

export function deleteAllOrderItems(): void {
    orderList.textContent = '';
    const currentPrice: number = calculatePrice();
    showTotalPrice(currentPrice);
}