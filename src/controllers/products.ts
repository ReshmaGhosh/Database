// product controller

import { Request, Response } from "express";
import {
  createProductService,
  deleteProductByIdServices,
  getAllProductByIdServices,
  getAllProductList,
} from "../services/products";
import Product from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const productInformation = new Product({
    title: req.body.title,
    price: req.body.price,
  });
  try {
    const product = await createProductService(productInformation);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }

  // res.status(200).json({message: "product"});
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const productList = await getAllProductList();
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product = await getAllProductByIdServices(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await deleteProductByIdServices(productId);

    if (deletedProduct) {
      res.status(200).json({ message: "product deleted", deletedProduct });
    } else {
      res.status(404).json({ error: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
