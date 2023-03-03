import { Injectable } from '@nestjs/common';
import { User } from 'src/user/models/user.model';
import { CreateOrderDto } from './dto/order.dto';
import { OrderRepository } from "./repository/order.repository"

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository) { }

    async create(user: User, orderDto: CreateOrderDto) {
        const dto = {
            name: orderDto.name,
            phoneNumber: orderDto.phoneNumber,
            email: orderDto.email,
            address: orderDto.address,
            city: orderDto.city,
            district: orderDto.district,
            note: orderDto.note,
            pay: orderDto.pay,
            delivery: orderDto.delivery,
            informations: [
                {
                    nameProduct: orderDto.nameProduct,
                    colorProduct: orderDto.colorProduct,
                    amountProduct: orderDto.amountProduct,
                }
            ],
            totalPrice: orderDto.totalPrice,
            user: user._id,
        }
        return await this.orderRepository.create(dto)
    }

    async getAll() {
        return this.orderRepository.findAll();
    }

    async deleteOne(id: string) {
        return this.orderRepository.deleteOne(id);
    }    
}
