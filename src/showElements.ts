import { imagesLink, priceContainer } from "./constants.js";

export function showTotalPrice(totalPrice: number): void {
    priceContainer.textContent = `Стоимость заказа: ${totalPrice}$`;
}

export function changeImage(number: number): void {
    const img = document.getElementById('img') as HTMLImageElement
    const link = imagesLink[number];
    img.src = link;
}