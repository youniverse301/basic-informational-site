const express = require('express');
const path = require('path');
const app = express();
const aboutRouter = require('./about');
const aboutContact = require('./contact-me');
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './html/index.html'));
});

app.use('/about', aboutRouter);

app.use('/contact-me', aboutContact);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './html/404.html'))
});

app.listen(port, () => {
    console.log('server is running at http://localhost:${port}')
})