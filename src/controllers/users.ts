import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const userInformation = new User({
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
  });
  console.log(userInformation);

  res.status(200).json(userInformation);
};
