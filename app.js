import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(req.body);
    res.status(200).send();
})

const port = process.env.PORT;
app.listen(port || 3000);