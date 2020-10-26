const app = require('express')();
const http = require('http').createServer(app);
const sv   = require('./pusher-channels/api/channels-event');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/ping', sv);

http.listen(process.env.PORT || 3500, () => {
    console.log(`Localhost working on ${process.env.PORT || 3500}`);
 })