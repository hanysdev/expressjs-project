const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const studentController = require('./controllers/studentController');

app.use(express.json());
app.use('/students', studentController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});