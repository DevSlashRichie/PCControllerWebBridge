const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        console.log('message: ' + message);
        io.emit('chat message', message);
    });
});

http.listen(process.env.PORT || 3500, () => {
    console.log(`Localhost working on ${process.env.PORT || 3500}`);
 })