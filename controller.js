

let products = [];

const getProDucts = (req, res) => {
    res.json(products);
}


const addProduct = (req, res) => { 
  const { productName, cost} = req.body;
  if (!productName ||!cost){
    return res.status(400).json({ error: 'productName and cost are required' });
  }

  const newProduct = {
    id: Math.floor(Math.random() * 10000),
    productName,
    cost,
    stockStatus: 'in-stock',
    createdAt: Date.now(),
  };

  products.push(newProduct);

  res.status(201).json({ message: ' Product added', product: newProduct });
};

const viewOneProduct =(req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
}





const editProducts =(req, res) => {
    const id = parseInt(req.params.id);
    const { productName, cost } = req.body;

    let found = false;
    let updatedProduct = null;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            if (productName) products[i].productName = productName;
            if (cost) products[i].cost = cost;

            found = true;
            updatedProduct = products[i];
            break;
        }
    }

    if (!found) {
        return res.status(404).json({ message: ' Product not found' });
    }

    res.json({ message: 'Product updated', product: updatedProduct });
}

const editProductsstatus = (req, res) => {
    const id = parseInt(req.params.id);
    const newStatus = req.params.status;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.stockStatus = newStatus;
    res.json({ message: `Product status updated to "${newStatus}"`, product });
}


const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const originalLength = products.length;

    products = products.filter(p => p.id !== id);

    if (products.length < originalLength) {
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}

module.exports = {
addProduct,
getProDucts,
viewOneProduct,
editProducts,
editProductsstatus,
 deleteProduct,
}