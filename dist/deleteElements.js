import { deleteActiveElements, calculatePrice } from "./utils.js";
import { changeImage, showTotalPrice } from "./showElements.js";
import { checkFullSet } from "./checkElements.js";
import { orderList } from "./constants.js";
export function deleteOrderItem(text, category, target) {
    orderList.removeChild(target);
    deleteActiveElements(text, category);
    const currentPrice = calculatePrice();
    showTotalPrice(currentPrice);
    const orderStep = checkFullSet();
    changeImage(orderStep);
}
export function deleteAllOrderItems() {
    orderList.textContent = '';
    const currentPrice = calculatePrice();
    showTotalPrice(currentPrice);
}
