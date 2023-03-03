import { IsNotEmpty } from "class-validator";

export interface ProductDto {
	name: string,
    price: number,
    type: string,
    brand: string,
    colorName: string,
    image: string,
}

export class UpdateProductDto {
    @IsNotEmpty()
    name: string;
    price: number;
    type: string;
    brand: string;
    colorName: string;
    image: string;
}

export class PaginationProductDto {
    @IsNotEmpty()
    page: number;

    @IsNotEmpty()
    limit: number;

    @IsNotEmpty()
    start: string;
}