const express = require ('express');
const searchRoutes = require('./routes/search/searchRoute');
const readRoutes = require('./routes/read/readRoute');
const chapterRoutes = require('./routes/chapters/chaptersRoute');

const app = express();

app.use(express.json());

app.use('/search', searchRoutes);
app.use('/read', readRoutes);
app.use('/chapters', chapterRoutes)


const listener = app.listen(8081, () => {
    console.log('server listening ' + listener.address().port)
})