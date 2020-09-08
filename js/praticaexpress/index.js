const express = require('express')
const app = express();
const port = 3000;


app.get('/aula', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01 ")
})

app.listen(port, () => { console.log('Aplicação com express porta ' + port) })