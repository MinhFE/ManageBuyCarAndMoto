import { Document, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    type: String,
    colors: [{
      colorName: String,
      image: String,
    }],
  },
  {
    timestamps: true,
    collection: 'products',
  },
);

export { ProductSchema };

export interface Product extends Document {
  name: string;
  price: number;
  type: string;
  colors: [{
    colorName: string,
    image: string,
  }]
}
