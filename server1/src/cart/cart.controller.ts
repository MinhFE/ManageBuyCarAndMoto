import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createCart(@Req() req: any, @Body() cartDto: CreateCartDto) {
        return this.cartService.createCart(req.user, cartDto)
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getCart(@Req() req: any) {
        return this.cartService.getCart(req.user)
    }

    @Delete(":id")
    async deleteCart(@Param('id') id: any) {
        return this.cartService.deleteCart(id);
    }
}
