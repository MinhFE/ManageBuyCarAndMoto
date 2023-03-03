import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "src/base.repositoty";
import { Product } from "../models/product.model";

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
    constructor(
        @InjectModel('Product') 
        private readonly productModel: Model<Product>
    ) {
        super(productModel);
    }

    async countProduct(filter: any) {
        return await this.productModel.countDocuments(filter);
    }

}