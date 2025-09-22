const express = require('express');
const app = express();
// The port inside the container
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello, CI/CD World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});