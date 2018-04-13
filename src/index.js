const express = require('express')
const app = express()
var port = 80

app.get('/', (req, res) => res.json({ msg: 'Hello!' }))


let server = app.listen(port, () => console.log('Example app listening on port '+ port +'!'))

app.stopServer = function stopServer() {
  server.close()
}

module.exports = app;