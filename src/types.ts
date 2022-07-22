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
export interface OrderInterface {
    pizza: IngridientsItemType[]
    userInfo: object[]
}