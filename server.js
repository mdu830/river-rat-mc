const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const build = './client/build'

const app = express();

// dev routes for client
app.use(express.static(path.resolve(
    __dirname, build
)));

// app.get('/contact', (req,res) => {
//     res.sendFile(path.resolve(
//         __dirname, './client/build', 'index.html'
//         ));
// });

app.get('/api', (req, res) => {
    res.send('hello world')
});

// server
app.listen(PORT, (err) => {
    if (err) app.get('/', (req, res) => {
        res.sendFile(path.resolve(
            __dirname, './client/build', 'index.html'
        ));
    });;
    console.log(`Server listening on PORT ${PORT}`);
});

// 
