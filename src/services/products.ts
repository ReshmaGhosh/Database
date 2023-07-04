
// // product services
import { ProductDocument } from "../models/Product";

//to communicate to the database

const createProductService = async (product: ProductDocument): Promise<ProductDocument> => {
    return product.save();
};

export default {createProductService};