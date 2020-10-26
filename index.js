const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

http.listen(process.env.PORT || 3500, () => {
    console.log(`Localhost working on ${process.env.PORT || 3500}`);
 })