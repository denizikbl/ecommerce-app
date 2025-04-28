import { Injectable } from '@nestjs/common';
import { dummyProducts } from '../../common/utils/data';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

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

    update(id: number, updateProductDto: UpdateProductDto) {
        const productIndex = dummyProducts.findIndex(product => product.id === id);
    
        if (productIndex === -1) {
          return { message: `Product with id ${id} not found.` };
        }
    
        const updatedProduct = { ...dummyProducts[productIndex], ...updateProductDto };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
      }
}
