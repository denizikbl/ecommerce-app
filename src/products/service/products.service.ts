import { Injectable } from '@nestjs/common';
import { dummyProducts } from '../../common/utils/data';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsService {
    private products = [...dummyProducts];

    getAllProducts(page: number, limit: number, sort: string, order: 'asc' | 'desc') {
        let sortedProducts = [...this.products];
        // sorting
        sortedProducts.sort((a, b) => {
            const aValue = a[sort];
            const bValue = b[sort];

            if (order === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        // pagination
        const start = (page - 1) * limit;
        const end = start + limit;
        return sortedProducts.slice(start, end);
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

    delete(id: number): any {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return { message: `Product with id ${id} not found.` };
        }
        const deletedProduct = this.products.splice(productIndex, 1);
        return deletedProduct[0]; 
    }

}
