

const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json()); 


 
const router = require('./rout');


app.use('/product', router);

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
