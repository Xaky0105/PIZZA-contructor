export enum Categories {
    main = 'main',
    sauce = 'sauce',
    vegetables = 'vegetables',
    meat = 'meat'
}

export type CategoriesType = keyof typeof Categories;

export type IngridientsType = {
    [key: string]: IngridientsItemType[];
}
export type IngridientsItemType = {
    name: string,
    price: number
}
export interface OrderInterface {
    pizza: IngridientsItemType[]
    userInfo: object[]
}

export interface ParentNodeWithId extends ParentNode {
    id: string
}