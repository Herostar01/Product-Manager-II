const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB live at your mom's house: productManager "))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

