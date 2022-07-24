import { buttonOrder, ingridientsContainer, orderList, ingr } from "./constants.js";
import { createIngridientsList, createPopup } from "./createElements.js";
import { addItemToOrderList, deleteItemFromOrderList } from './eventListener.js';
import { Categories } from "./types.js";
window.onload = function () {
    document.body.classList.add('loaded');
};
export function renderIngridients() {
    Object.keys(ingr).forEach((key) => createIngridientsList(ingr[key], Categories[key]));
}
renderIngridients();
ingridientsContainer.addEventListener('click', addItemToOrderList);
orderList.addEventListener('click', deleteItemFromOrderList);
buttonOrder.addEventListener('click', createPopup);
