const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const build = './client/build'

const app = express();

// dev routes for client
app.use(express.static(path.resolve(
    __dirname, './client/build'
)));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });

// server
app.listen(PORT, (err) => {
    console.log(`Server listening on PORT ${PORT}`);
});

// 
