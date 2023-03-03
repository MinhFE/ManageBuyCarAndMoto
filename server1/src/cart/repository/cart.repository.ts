import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "src/base.repositoty";
import { Cart, CartDocument } from "../model/cart.model";

export class CartRepository extends BaseRepository<CartDocument> {
    constructor(@InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>) {
        super(cartModel);
    }

    async findCart(id: any): Promise<CartDocument[]> {
        return await this.cartModel.find({user: id})
    }
}