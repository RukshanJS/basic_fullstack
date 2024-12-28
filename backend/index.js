const express = require('express');
const cors = require('cors');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Route handler
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Pizza\n');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});