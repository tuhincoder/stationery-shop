import express, { Application } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product.rout';

const app: Application = express();
// const port = 3000;

//parser
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

export default app;
