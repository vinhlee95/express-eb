const express = require('express')
const todos = require('./todos.json')

const app = express()
app.get('/', (req, res) => {
	res.status(200).json({message: 'Hello world'})
})

app.get('/todos', (req, res) => {
	res.status(200).json(todos)
})

app.listen(8081, () => {
	console.log('App is listening on port 8081')
})