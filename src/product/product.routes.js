'use strict';

import { Router } from 'express';
import { deleteProduct, get, save, search,  update } from './product.controller.js';

const api = Router();

api.post('/save', save);
api.get('/get', get);
api.put('/update/:id', update);
api.delete('/delete/:id', deleteProduct);
api.post('/search', search);

export default api;
