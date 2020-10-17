// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

//app.use('/', express.static('public'));
app.use(cors());

//const budget = require('./budget-data.json');

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/budget', (req, res) => {
    //res.json(budget);
    res.sendFile('budget-data.json', {root: __dirname});
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});