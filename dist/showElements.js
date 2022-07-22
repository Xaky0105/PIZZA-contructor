import { priceContainer } from "./constants.js";
export function showTotalPrice(totalPrice) {
    priceContainer.textContent = `Стоимость заказа: ${totalPrice}$`;
}
export function changeImage(number) {
    const img = document.getElementById('img');
    img.src = `./img/pizza${number}.png`;
}
