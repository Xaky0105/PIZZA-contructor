import { deleteActiveElements, calculatePrice, rerenderPriceAndImage } from "./utils.js";
import { showTotalPrice } from "./showElements.js";
import { orderList } from "./constants.js";
export function deleteOrderItem(text, category, target) {
    orderList.removeChild(target);
    deleteActiveElements(text, category);
    rerenderPriceAndImage();
}
export function deleteAllOrderItems() {
    orderList.textContent = '';
    const currentPrice = calculatePrice();
    showTotalPrice(currentPrice);
}
