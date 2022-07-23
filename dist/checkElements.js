import { orderState, buttonOrder } from "./constants.js";
import { Categories } from "./types.js";
import { isAllElemDontIncludes } from "./utils.js";
export function checkFullSet() {
    let stepOrder = 0;
    Object.keys(orderState).forEach((key) => {
        const isArrLengthEqualOne = orderState[key].length === 1;
        const isArrLengthEqualOneOrTwo = orderState[key].length !== 0 && orderState[key].length <= 2;
        if ((key === Categories.main || key === Categories.sauce) && isArrLengthEqualOne) {
            stepOrder++;
        }
        if ((key === Categories.meat || key === Categories.vegetables) && isArrLengthEqualOneOrTwo) {
            stepOrder++;
        }
    });
    buttonOrder.disabled = stepOrder === 4 ? false : true;
    return stepOrder;
}
export function isAddIngridients(category, text) {
    if (category === Categories.main || category === Categories.sauce) {
        return orderState[category].length === 0;
    }
    else if (category === Categories.meat || category === Categories.vegetables) {
        return orderState[category].length < 2 && isAllElemDontIncludes(category, text);
    }
    return false;
}
