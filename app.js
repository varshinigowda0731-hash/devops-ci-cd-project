const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Devops pipeline working perfectly - varshini 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





