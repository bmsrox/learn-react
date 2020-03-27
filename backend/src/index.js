const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://bruxz:bruxz23@ds119810.mlab.com:19810/goweek-backend', {
    useNewUrlParser: true, //informa que esta usando novo formato de conexao
    useUnifiedTopology: true
});

//middleware para deixar o socket disponivel em toda aplicação
app.use((req, res, next)=>{
    req.io = io;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Running on port 3000')
});