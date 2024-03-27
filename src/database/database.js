import mongoose from 'mongoose';
import 'dotenv/config';

const mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL);

const conexion = mongoose.connection;
conexion.once('open', () => {
  console.log('Conexion exitosa con la base de datos.');
});
