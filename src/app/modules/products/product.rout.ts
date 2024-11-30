import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
//create product data into the mongodb
router.post('/create-product', productController.createProducts);
//get all product data from mongodb
router.get('/', productController.getAllProducts);
//get single product data from mongodb
router.get('/:productId', productController.getSingleProduct);
//Update a Stationery Product

export const productRoutes = router;
