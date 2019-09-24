const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send('<h2>test text</h2>');
});

app.get('/about', (request, response) => {
    response.send('<h2>abt text</h2>');
});

app.get('/contacts', (request, response) => {
    response.send('<h2>ctcs text</h2>');
});

app.listen(3001);