import 'dotenv/config';
import express from 'express';
import routes from '../routes/index.js';
import ErrorHandler from '../middlewares/error.js';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandler);
app.use('/uploads', express.static('src/services/uploads/files/images'));

export default app;