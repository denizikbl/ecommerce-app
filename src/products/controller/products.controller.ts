import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto } from '../dto/create-product.dto';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(): any[] {
        return this.productsService.getAllProducts();
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto): any {
        return this.productsService.createProduct(createProductDto);
    }
}

