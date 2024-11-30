import { Request, Response } from 'express';
import { productService } from './product.service';

// create products and response to user
const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductsIntoDB(product);
    res.status(200).json({
      message: 'Product created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get AllProducts from DB and response to the user
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProductIntoDB();
    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get single product from DB and response to the user
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductIntoDB(productId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productController = {
  createProducts,
  getAllProducts,
  getSingleProduct,
};
