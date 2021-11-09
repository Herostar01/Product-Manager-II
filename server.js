const express = require('express');
const cors = require('cors') // New 2.0 
const app = express();
const port = 8000;

require('./server/config/mongoose.config'); // new 3.0

app.use(cors()) // 2.0 

app.use(express.json()); // new 3.0

app.use(express.urlencoded({ extended: true })); // New 3.0

require('./server/routes/product.routes')(app); // This is new

app.listen(port, () => {
    console.log("Live on Port 8000") 
}); 

