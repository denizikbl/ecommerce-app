import { IsArray, IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductImage {
    @IsString()
    url: string;

    @IsNumber()
    index: number;
}

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;
    
    @IsNumber()
    store_id: number;

    @IsNumber()
    category_id: number;

    @IsNumber()
    rating: number;

    @IsNumber()
    sell_count: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductImage)
    images: ProductImage[];
}
