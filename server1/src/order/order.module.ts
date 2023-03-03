import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './model/order.model';
import { OrderRepository } from './repository/order.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{
        name: Order.name,
        schema: OrderSchema
    }])
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
