'use strict';

import { Router } from 'express';
import { deleteC, getC, saveC, updateC } from './category.controller.js';

const api = Router();

api.post('/saveC', saveC);
api.get('/getC', getC);
api.put('/updateC/:id', updateC);
api.delete('/deleteC/:id', deleteC);

export default api;
