import { buttonOrder, ingridientsContainer, orderList, ingr } from "./constants.js";
import { createIngridientsList } from "./createElements.js";
import { addItemToOrderList, deleteItemFromOrderList, orderButton } from './eventListener.js';
import { Categories } from "./types.js";
window.onload = function () {
    document.body.classList.add('loaded');
};
export function renderIngridients() {
    createIngridientsList(ingr.main, Categories.main);
    createIngridientsList(ingr.meat, Categories.meat);
    createIngridientsList(ingr.sauce, Categories.sauce);
    createIngridientsList(ingr.vegetables, Categories.vegetables);
}
renderIngridients();
ingridientsContainer.addEventListener('click', addItemToOrderList);
orderList.addEventListener('click', deleteItemFromOrderList);
buttonOrder.addEventListener('click', orderButton);
