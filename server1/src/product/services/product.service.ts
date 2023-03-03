import { productNotFound } from './../exceptions/productNotFound.exception';
import { ProductDto, UpdateProductDto } from './../dto/product.dto';
import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { }

    async getAll() {
        return await this.productRepository.findAll();
    }

    async getOne(id: string) {
        const product = await this.productRepository.findById(id);
        if(product) {
            return product;
        } else {
            // throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
            // throw new productNotFound(id)
            throw new NotFoundException(id);
        }

    }

    async createProduct(product: ProductDto) {
        const dto = {
            name: product.name,
            price: product.price,
            type: product.type,
            brand: product.brand,
            colors: [
                {
                    colorName: product.colorName,
                    image: product.image
                }
            ]
        }
        return await this.productRepository.create(dto);
    }

    async updateProduct(id: string, product: UpdateProductDto) {
        const dto = {
            name: product.name,
            price: product.price,
            type: product.type,
            brand: product.brand,
            colors: [
                {
                    colorName: product.colorName,
                    image: product.image,
                }
            ]
        }
        return await this.productRepository.findByIdAndUpdate(id, dto);
    }

    async deleteProduct(id: string) {
        return await this.productRepository.deleteOne(id);
    }

    async deleteMany(id: string) {
        return await this.deleteMany(id);
    }

}
