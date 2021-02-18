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

app.get('/sortby/:sort', (req, res) => {
    const sortModules = [...modules]
    const sort = req.params.sort
    sortModules.sort((a, b) => a[sort] - b[sort])
    res.json(sortModules)
})

module.exports = {
    app
} 