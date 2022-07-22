import { imagesLink, priceContainer } from "./constants.js";
export function showTotalPrice(totalPrice) {
    priceContainer.textContent = `Стоимость заказа: ${totalPrice}$`;
}
export function changeImage(number) {
    const img = document.getElementById('img');
    const link = imagesLink[number];
    img.src = link;
}
