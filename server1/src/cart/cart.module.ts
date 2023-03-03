import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './model/cart.model';
import { CartRepository } from './repository/cart.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{
        name: Cart.name,
        schema: CartSchema
    }])
  ],
  controllers: [CartController],
  providers: [CartService, CartRepository],
})
export class CartModule {}
