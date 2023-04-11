const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("This is Home Page of my First Express App with Hirdesh");
});

app.get("/about", (req, res) => {
    res.send("This is About Page of my First Express App with Hirdesh");
});

app.post("/about", (req, res) => {
    res.send("This is a Post Request of About Page of my First Express App with Hirdesh");
});

app.get("/this", (req, res) => {
    res.status(404).send("This is page is not found in this website");
});

app.listen(port, () => {
    console.log(`The Application started successfully on port ${port}`);
})