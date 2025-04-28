import { Injectable } from '@nestjs/common';
import { dummyProducts } from '../../common/utils/data';

@Injectable()
export class ProductsService {
    private products = [...dummyProducts];

    getAllProducts() {
        return this.products;
    }
    
}
