const express = require("express"); //import express from "express"
const app = express() // create an instance of express
app.get("/", function (req, res) {
    res.send("Hello World!") // send a response to the client
})
app.listen(3000) // listen on port 3000