import { StationeryShop } from './product.interface';
import { StationeryProductModel } from './product.model';

//create stationery product
const createProductsIntoDB = async (productData: StationeryShop) => {
  const result = await StationeryProductModel.create(productData);
  return result;
};

//get all stationery product
const getProductIntoDB = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

//get specific stationery product
const getSingleProductIntoDB = async (id: string) => {
  const result = await StationeryProductModel.findOne({ id });
  return result;
};

//update a stationery product
// const updateProduct = async (id: string) => {
//   const result = await StationeryProductModel.put;
// };

export const productService = {
  createProductsIntoDB,
  getProductIntoDB,
  getSingleProductIntoDB,
};
