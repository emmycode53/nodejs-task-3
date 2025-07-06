

const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json()); 


const route = require('./rout'); 


app.use('/product', route);

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
