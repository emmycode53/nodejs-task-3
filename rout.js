const express = require('express');
const router = express.Router();

const {
    getProDucts,
    viewOneProduct,
    editProducts,
    editProductsstatus,
    addProduct,
    deleteProduct} = require('./controller')





router.get('/',getProDucts);


router.get('/products/:id', viewOneProduct);


router.post('/products', addProduct);


router.patch('/products/:id', editProducts);



router.patch('/products/:id/:status',editProductsstatus );


router.delete('/products/:id', deleteProduct);



module.exports = router;
