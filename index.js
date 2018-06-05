const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();
let server = app.listen(4000, () => {
    console.log('listening to request on port 4000');
});

//Static file
app.use(express.static('public'));

//Socket setuo

const io = socket(server);

io.on('connection', (socket) => {
    console.log('Made socket connection', socket.id);
});