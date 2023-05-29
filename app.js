const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/product.js");

app.get("/", (req, res) => {
    res.send("server is live");
});

//middleware or to set router
app.use("/products", products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} server connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();