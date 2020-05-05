const express = require('express')

const app = express()
app.get('/', (req, res) => {
	res.status(200).json({message: 'Hello world'})
})

app.listen(4000, () => {
	console.log('App is listening on port 4000')
})