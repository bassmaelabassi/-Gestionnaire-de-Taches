
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');


const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/tasks').then(() => {
    console.log('connected succefuly')
})

.catch(error =>{
    console.log('error concted mongoDB');
})


//app.use('/api/task', taskRoutes);


app.listen(port, () => {
    console.log(`serveur ecouter le port ${port}`);
});