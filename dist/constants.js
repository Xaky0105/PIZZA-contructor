export const buttonOrder = document.getElementById('btn');
export const ingridientsContainer = document.getElementById('ingridients-container');
export const orderList = document.getElementsByClassName('order-list')[0];
export const priceContainer = document.getElementById('price-container');
export const pizzaWrapper = document.getElementsByClassName('pizza-wrapper')[0];
export var Categories;
(function (Categories) {
    Categories["main"] = "main";
    Categories["sauce"] = "sauce";
    Categories["vegetables"] = "vegetables";
    Categories["meat"] = "meat";
})(Categories || (Categories = {}));
export const ingr = {
    main: [
        { name: 'Чесночная основа', price: 5 },
        { name: 'Томатная основа', price: 4 },
        { name: 'Сырная основа', price: 3 },
        { name: 'Основа барбекю', price: 6 }
    ],
    sauce: [
        { name: 'Томатный соус', price: 5 },
        { name: 'Соус барбекю', price: 4 },
        { name: 'Сырный соус', price: 3 },
        { name: 'Соус карри', price: 6 }
    ],
    vegetables: [
        { name: 'Лук', price: 5 },
        { name: 'Шампиньоны', price: 4 },
        { name: 'Огурцы', price: 3 },
        { name: 'Ананас', price: 6 }
    ],
    meat: [
        { name: 'Бекон', price: 5 },
        { name: 'Салями', price: 4 },
        { name: 'Курица', price: 3 },
        { name: 'Ветчина', price: 6 }
    ]
};
export const orderState = {
    main: [],
    sauce: [],
    vegetables: [],
    meat: [],
};
