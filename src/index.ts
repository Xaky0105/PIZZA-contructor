import { buttonOrder, ingridientsContainer, orderList, ingr } from "./constants.js";
import { createIngridientsList } from "./createElements.js";
import { addItemToOrderList, deleteItemFromOrderList, orderButton } from './eventListener.js';
import { Categories, CategoriesType } from "./types.js";

window.onload = function(): void {
    document.body.classList.add('loaded');
}

export function renderIngridients(): void {
    Object.keys(ingr).forEach((key) => createIngridientsList(ingr[key], Categories[key as CategoriesType]));
}

renderIngridients();

ingridientsContainer.addEventListener('click', addItemToOrderList);
orderList.addEventListener('click', deleteItemFromOrderList);
buttonOrder.addEventListener('click', orderButton);







