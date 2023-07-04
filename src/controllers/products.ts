// product controller

import { Request, Response } from "express";

const productList = [
  { id: 1, title: "apple", price: 10 },
  { id: 2, title: "banana", price: 20 },
  { id: 3, title: "kiwi", price: 30 },
];

export const getAllProducts = async (request: Request, response: Response) => {
  response.json({ message: "get method" });
};

export const getProductById = async (request: Request, response: Response) => {
  const productId = request.params;
  console.log(productId, "product id");
  const result = productList.filter(
    (product) => product.id === Number(productId.id)
  );

  response.json(result);
};

export const createProducts = async (request: Request, response: Response) => {
  response.json({ message: "create products" });
};
