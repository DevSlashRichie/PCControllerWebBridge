const express = require('express');
const app = express();
const sv   = require('./pusher-channels/api/channels-event');

// Body parser
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/ping', sv);

app.listen(process.env.PORT || 3500, () => {
    console.log(`Localhost working on ${process.env.PORT || 3500}`);
 })