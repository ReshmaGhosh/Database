// product model
//title
//price
//image

import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: number;
  image: string;
};

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "mango",
  },
  price: {
    type: Number,
    required: true,
    default: 30,
  },
  image: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("product", ProductSchema);
