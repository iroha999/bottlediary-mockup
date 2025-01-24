// filepath: /c:/Users/iroha/Downloads/nextjs-fastapi/server/index.js
const express = require("express");
const app = express();
const port = 8000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
