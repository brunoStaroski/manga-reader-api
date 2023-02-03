const express = require ('express');
const searchRoutes = require('./routes/search/searchRoute');
const readRoutes = require('./routes/read/readRoute');

const app = express();

app.use(express.json());

app.use('/search', searchRoutes);
app.use('/read', readRoutes);


const listener = app.listen(8080, () => {
    console.log('server listening ' + listener.address().port)
})