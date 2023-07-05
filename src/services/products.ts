import { getAllProduct } from "./../controllers/products";
// // product services

import Product, { ProductDocument } from "../models/Product";

//to communicate to the database
// 2job for .save function, 1) save product to the database 2)return product from the database

const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument | undefined> => {
  try {
    return product.save();
  } catch (error) {
    console.log(error);
  }
};

export { createProductService };

export const getAllProductList = async (): Promise<
  ProductDocument[] | undefined
> => {
  try {
    // find: get all product from database
    return Product.find();
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductByIdServices = async (productId: string): Promise<
  ProductDocument | undefined | null
> => {
  try {
    // find: get all product from database
    const foundProduct = await Product.findById(productId);
    if(!foundProduct){
        console.log("product not found")
    }
    return foundProduct;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductByIdServices = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  try {
   
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (!deleteProduct) {
      console.log("product not found");
    }
    return deleteProduct;
  } catch (error) {
    console.log(error);
  }
};