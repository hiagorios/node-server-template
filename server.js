const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Aloww desgraça')
})

app.listen(3002);