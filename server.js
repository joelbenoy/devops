const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "OK v1" });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on", port));
