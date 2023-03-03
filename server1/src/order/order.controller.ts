/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { 

    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createOrder(@Req() req: any, @Body() orderDto: CreateOrderDto) {
        return this.orderService.create(req.user, orderDto)
    }

    @Get()
    async getAll() {
        return this.orderService.getAll()
    }

    @Delete(":id")
    async deleteOne(@Param("id") id: string) {
        return this.orderService.deleteOne(id);
    }
}
