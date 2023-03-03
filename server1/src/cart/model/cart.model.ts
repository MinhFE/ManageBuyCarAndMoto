import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/models/user.model';

export type CartDocument = Cart & Document;

@Schema({timestamps: true})
export class Cart {
    @Prop()
    image: string;

    @Prop()
    price: number;

    @Prop()
    name: string;

    @Prop()
    color: string;

    @Prop({
        default: 1
    })
    amount: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    })
    user: User;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
