export const buttonOrder = document.getElementById('btn') as HTMLButtonElement
export const ingridientsContainer = document.getElementById('ingridients-container') as HTMLDivElement
export const orderList = document.getElementsByClassName('order-list')[0] as HTMLUListElement
export const priceContainer = document.getElementById('price-container') as HTMLSpanElement
export const pizzaWrapper = document.getElementsByClassName('pizza-wrapper')[0] as HTMLDivElement

export enum Categories {
    main = 'main',
    sauce = 'sauce',
    vegetables = 'vegetables',
    meat = 'meat'
}

export type IngridientsType = {
    [key: string]: IngridientsItemType[];
    main: IngridientsItemType[],
    sauce: IngridientsItemType[],
    vegetables: IngridientsItemType[],
    meat: IngridientsItemType[]
}
export type IngridientsItemType = {
    name: string,
    price: number
}

export const ingr: IngridientsType = {
    main: [
        {name: 'Чесночная основа', price: 5},
        {name: 'Томатная основа', price: 4},
        {name: 'Сырная основа', price: 3},
        {name: 'Основа барбекю', price: 6}
    ],
    sauce: [
        {name: 'Томатный соус', price: 5},
        {name: 'Соус барбекю', price: 4},
        {name: 'Сырный соус', price: 3},
        {name: 'Соус карри', price: 6}
    ],
    vegetables: [
        {name: 'Лук', price: 5},
        {name: 'Шампиньоны', price: 4},
        {name: 'Огурцы', price: 3},
        {name: 'Ананас', price: 6}
    ],
    meat: [
        {name: 'Бекон', price: 5},
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
