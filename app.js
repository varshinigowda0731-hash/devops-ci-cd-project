const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI Test successful - varshini's devops project 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


