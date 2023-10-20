import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(req.body);
    res.status(200).send();
})

app.post("/", (req, res) => {
    console.log("Received request==============");
    console.log("headers:")
    console.log(req.headers);
    console.log("body:")
    console.log(req.body);
    res.status(200).send();
})

const port = process.env.PORT;
app.listen(port || 3000, () => console.log(`Listening on port ${port}`));