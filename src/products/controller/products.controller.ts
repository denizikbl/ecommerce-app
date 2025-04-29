import { Controller, Get, Post, Put, Body, Param, ParseIntPipe, Delete, Query, UsePipes } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CapitalizeNamePipe } from '../../common/pipes/capitalize-name.pipe';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
        @Query('sort') sort = 'id',
        @Query('order') order: 'asc' | 'desc' = 'asc',
    ): any[] {
        return this.productsService.getAllProducts(+page, +limit, sort, order);
    }

    @Post()
    @UsePipes(CapitalizeNamePipe)
    createProduct(@Body() createProductDto: CreateProductDto): any {
        return this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    @UsePipes(CapitalizeNamePipe)
    update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.delete(id);
    }
}


