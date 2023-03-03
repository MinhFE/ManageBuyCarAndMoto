import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from './../../base.repositoty';
import { Order, OrderDocument } from './../model/order.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository extends BaseRepository<OrderDocument> {
    constructor(
        @InjectModel(Order.name) 
        private readonly orderRepository: Model<OrderDocument>) 
    {
        super(orderRepository);
    }
}