import express from 'express';
import Product from '../models/product.js';
const router = express.Router();

router.post('/', (req, res) => {
    Product.create(req.body)
        .then(product => res.status(201).send(product))
        .catch(console.error)
})

export default router;