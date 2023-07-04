// product controller

import { Request, Response } from "express"; 
import productServices from "../services/products"
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const productInformation = new Product({
    title: req.body.title,
    price: req.body.price,
  });
  const product = await productServices.createProductService(
    productInformation
  );
  res.status(200).json(product);
  // res.status(200).json({message: "product"});
};