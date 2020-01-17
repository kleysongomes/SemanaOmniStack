const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:102030@cluster0-hwnes.mongodb.net/dbdev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);






















//MÉTODOS HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARÂMETROS:
//Query Params: request.query (Filtros, ordenação, paginação, ...) 
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.bory (Dados para cria ou alterar um registro)

//MongoDB (Não-relacional e rápido)


