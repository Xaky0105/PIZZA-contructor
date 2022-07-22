import { imagesLink, priceContainer } from "./constants.js";
export function showTotalPrice(totalPrice) {
    priceContainer.textContent = `Стоимость заказа: ${totalPrice}$`;
}
export function changeImage(number) {
    const img = document.getElementById('img');
    const link = imagesLink[number];
    img.src = link;
}
export function showSuccessfulSubmission() {
    const spanSuccessful = document.getElementsByClassName('successful')[0];
    spanSuccessful.style.opacity = '1';
    setTimeout(() => spanSuccessful.style.opacity = '0', 1500);
}
