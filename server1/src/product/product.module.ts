import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductRepository } from './repository/product.repository';
import { ProductService } from './services/product.service';
import { ProductSchema } from './models/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: 'Product',
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
