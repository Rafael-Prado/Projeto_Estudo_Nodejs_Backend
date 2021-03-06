const express  =  require('express');
const mogoose = require('mongoose');
const cors = require('cors');

const app  =  express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mogoose.connect(
    "mongodb://rafaelprado:1980wo@ds155203.mlab.com:55203/rafael-goweek", 
{
    useNewUrlParser: true 
}
);

app.use((req, res, next) =>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(3000, ()  =>{
    console.log(': ) Server started on port 3000');
});

