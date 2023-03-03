import { ProductDto } from './../dto/product.dto';
import { Controller, Get, Put, Delete, Body, Param, Post } from '@nestjs/common';
import { UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    //@Query() {page, limit, start}: PaginationProductDto
    async getAll() {
        return await this.productService.getAll();
    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        return await this.productService.getOne(id);
    }

    @Post()
    async createProduct(@Body() product: ProductDto) {
        return await this.productService.createProduct(product);
    }

    @Put(":id")
    async updateProduct(@Param("id") id: string, @Body() product: UpdateProductDto) {
        return await this.productService.updateProduct(id, product)
    }

    @Delete(":id")
    async deleteProduct(@Param("id") id: string) {
        await this.productService.deleteProduct(id);
        return {
            massage: "Delete successfully"
        }
    }

    @Delete(":id")
    async deleteMany(@Param("id") id: string) {
        await this.productService.deleteMany(id)
        return true;
    }

}
