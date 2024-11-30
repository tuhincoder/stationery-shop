import { model, Schema } from 'mongoose';
import { StationeryShop } from './product.interface';

//stationer product schema
const stationeryProductSchema = new Schema<StationeryShop>({
  name: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Education',
      'Technology',
    ],
    required: true,
  },
  description: { type: String, required: true, trim: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// //order schema
// const orderSchema = new Schema<>({

// })

export const StationeryProductModel = model<StationeryShop>(
  'StationeryProduct',
  stationeryProductSchema,
);
// export const OrderModel = model<>({'Order'});
