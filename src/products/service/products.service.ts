import { Injectable } from '@nestjs/common';
import { dummyProducts } from '../../common/utils/data';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductsService {
    private products = [...dummyProducts];

    getAllProducts() {
        return this.products;
    }

    createProduct(createProductDto: CreateProductDto): any {
        const newProduct = {
            id: this.products.length + 1,
            ...createProductDto,

        }
        this.products.push(newProduct);
        return newProduct;
    }
}
