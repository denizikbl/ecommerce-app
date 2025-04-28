import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../service/products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(): any[] {
        return this.productsService.getAllProducts();
    }
}

