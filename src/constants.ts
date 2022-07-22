import { IngridientsType } from "./types"

export const buttonOrder = document.getElementById('btn') as HTMLButtonElement
export const ingridientsContainer = document.getElementById('ingridients-container') as HTMLDivElement
export const orderList = document.getElementsByClassName('order-list')[0] as HTMLUListElement
export const priceContainer = document.getElementById('price-container') as HTMLSpanElement
export const pizzaWrapper = document.getElementsByClassName('pizza-wrapper')[0] as HTMLDivElement

export const ingr: IngridientsType = {
    main: [
        {name: 'Чесночная основа', price: 5},
        {name: 'Томатная основа', price: 4},
        {name: 'Сырная основа', price: 7},
        {name: 'Основа барбекю', price: 6}
    ],
    sauce: [
        {name: 'Томатный соус', price: 2},
        {name: 'Соус барбекю', price: 4},
        {name: 'Сырный соус', price: 3},
        {name: 'Соус карри', price: 6}
    ],
    vegetables: [
        {name: 'Лук', price: 5},
        {name: 'Шампиньоны', price: 9},
        {name: 'Огурцы', price: 3},
        {name: 'Ананас', price: 6}
    ],
    meat: [
        {name: 'Бекон', price: 7},
        {name: 'Салями', price: 4},
        {name: 'Курица', price: 3},
        {name: 'Ветчина', price: 6}
    ]
}

export const orderState: IngridientsType = {
    main: [],
    sauce: [],
    vegetables: [],
    meat: [],
}

export const imagesLink: string[] = [
    './img/pizza0.png', 
    './img/pizza1.png', 
    './img/pizza2.png', 
    './img/pizza3.png', 
    './img/pizza4.png'
];
