const express = require('express');
const app = express();
const cors = require('cors');
const { modules } = require('./data.js');

app.use(cors())

app.get('/', (req, res) => {
    res.json(modules)
})

app.get('/module/:id', (req, res) => {
    const id = req.params.id;
    const selectedModule = modules.find(module => module.id === id)
    res.json(selectedModule)
})

module.exports = {
    app
} 