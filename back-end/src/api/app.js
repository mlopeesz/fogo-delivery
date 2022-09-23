const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const customerRoutes = require('../routes/customerRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('src'));
app.use(userRoutes);
app.use(customerRoutes);

module.exports = app;
