const express = require('express');
const mysql = require('mysql2');
const db = require('./config/connection');
const promptMenu = require('./lib/questions');

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

// Start Promt with function
db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Server now listening port ${PORT}`);
        promptMenu();
    });
});