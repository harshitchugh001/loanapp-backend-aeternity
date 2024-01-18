const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connect to db
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch(err => console.error('DB Connection Error:', err));

mongoose.connection.on("error", err => {
  console.error(`DB connection error: ${err.message}`);
});

const requestmoneyRoutes = require('./routes/requestmoney');
const sendmoneyRoutes = require('./routes/sendmoney');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());



// routes
app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

app.use('/api', requestmoneyRoutes);
app.use('/api', sendmoneyRoutes);



const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

module.exports = app;