const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const db = require('./queries');

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());

app.post('/score', db.addScore);

app.get('/', db.getScores);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});