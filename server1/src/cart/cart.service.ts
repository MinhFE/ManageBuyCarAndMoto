import { Injectable } from '@nestjs/common';
import { User } from 'src/user/models/user.model';
import { CreateCartDto } from './dto/cart.dto';
import { CartRepository } from './repository/cart.repository';

@Injectable()
export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}

    async createCart(user: User,cartDto: CreateCartDto) {
        cartDto.user = user._id;
        return this.cartRepository.create(cartDto);
    }

    async getCart(user: User) {
        return this.cartRepository.findCart(user._id);
    }

    async deleteCart(id: any) {
        return this.cartRepository.deleteOne(id);
    }
}
