export class ProductModel {
    id!: number;
    idCategory?: number;
    idIngredient?: number;
    idStock?: number;
    productName!: string;
    expiredDate!: string;
    createdAt!: string;
    quantityStock?: string;
    ingridientName?: string
    categoryName?: string;
}