import mongoose, { Schema } from 'mongoose';

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLenght: 2,
    maxLenght: 50,
  },
});
