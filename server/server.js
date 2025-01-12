const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Coffee Server Is Runnig');
});

app.listen(port, () => {
  console.log(`Coffee Server is runnig on port ${port}`);
});
