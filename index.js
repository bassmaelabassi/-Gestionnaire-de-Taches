require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/api/task', taskRoutes);


app.listen(port, () => {
    console.log(`serveur ecouter le port ${port}`);
});