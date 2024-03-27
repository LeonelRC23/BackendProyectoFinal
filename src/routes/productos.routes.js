import { Router } from 'express';
import { crearProducto } from '../controllers/productos.controllers.js';

const router = Router();

router.route('/producto').post(crearProducto);

export default router;
