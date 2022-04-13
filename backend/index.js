const express = require('express');
const mongoose = require('mongoose');

const PORT = 3030;
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
//, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}
mongoose.connect('mongodb://localhost/todolist')
    .then(() => console.log('connected to DB succesfully'))
    .catch((err) => console.error(err));

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});