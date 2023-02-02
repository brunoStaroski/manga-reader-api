const express = require ('express');
const searchRoutes = require('./routes/search/searchRoute');

const app = express();

app.use(express.json());

app.use('/search', searchRoutes);

const listener = app.listen(8080, () => {
    console.log('server listening ' + listener.address().port)
})