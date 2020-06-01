const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.send('wellcome to simple website :)');
});

app.listen(port, () => {
    console.log(`Express server running on port ${port}!`)
})