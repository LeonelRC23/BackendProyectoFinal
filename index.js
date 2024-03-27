import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import './src/database/database.js';
import productosRouter from './src/routes/productos.routes.js';

const app = express();

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('Puerto utilizado: ' + app.get('port'));
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productosRouter);
