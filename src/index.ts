import { buttonOrder, ingridientsContainer, orderList, ingr, Categories } from "./constants.js";
import { createIngridientsList } from "./createElements.js";
import { addItemToOrderList, deleteItemFromOrderList, orderButtonClickHandler } from './eventListener.js';

export function renderIngridients(): void {
    createIngridientsList(ingr.main, Categories.main);
    createIngridientsList(ingr.meat, Categories.meat);
    createIngridientsList(ingr.sauce, Categories.sauce);
    createIngridientsList(ingr.vegetables, Categories.vegetables);
}
renderIngridients()

ingridientsContainer.addEventListener('click', addItemToOrderList);
orderList.addEventListener('click', deleteItemFromOrderList);
buttonOrder.addEventListener('click', orderButtonClickHandler);


