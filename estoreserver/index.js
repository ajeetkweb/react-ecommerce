const express= require('express');

const app =express();
const productCategories =require('./Routes/productCategories');
const cors = require('cors');

app.use(cors());

app.use('/',productCategories);


app.listen(8007);
