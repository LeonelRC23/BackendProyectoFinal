import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  correo: {
    type: String,
    trim: true,
    require: true,
    validate: {
        validator: (value)=>{
            const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            return pattern.test(value)
        }
    }
  },
  contrasenia: {
    type: String,
    trim: true,
    require: true
  },
  perfil: {
    type: String,
    trim: true,
    require: true,
  },
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15
  },
});

export const Usuario = mongoose.model('usuario', usuarioSchema);