import mongoose, { Schema } from 'mongoose';

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    unique: true,
    minLenght: 2,
    maxLenght: 50,
  },
  estadoProducto: {
    type: Boolean,
    required: true,
    unique: true,
  },
  precioProducto: {
    type: Number,
    required: true,
    min: 1000,
    max: 10000,
  },
  detalleProducto: {
    type: String,
    required: true,
    minLenght: 50,
    maxLenght: 500,
  },
  categoriaProducto: {
    type: String,
    required: true,
    enum: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
  },
  imagenProducto: {
    type: String,
    required: true,
  },
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
