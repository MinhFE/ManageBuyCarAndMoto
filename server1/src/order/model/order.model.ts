import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, raw, Schema } from "@neStjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/models/user.model";
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    name: String;

    @Prop()
    phoneNumber: String;
    
    @Prop()
    email: String;
    
    @Prop()
    address: String;
    
    @Prop()
    city: String;
    
    @Prop()
    district: String;
    
    @Prop()
    note: String;
    
    @Prop()
    pay: String;
    
    @Prop()
    delivery: String;

    @Prop()
    nameProduct: String;

    @Prop()
    colorProduct: String;

    @Prop()
    amountProduct: String;

    @Prop()
    informations: Array<Object>;
    
    @Prop()
    totalPrice: Number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    })
    user: User;
}

export const OrderSchema = SchemaFactory.createForClass(Order)