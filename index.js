const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

//DB connection initialization
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://admin:admin@greenday.bdgri.mongodb.net/products?retryWrites=true&w=majority")
        .then(console.log('Connected to mongodb ....'))
        
const products = require("./routes/products");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products',products);

const port = process.env.PORT || 6401;

app.listen(port,console.log(`Listening at port ${port}`));