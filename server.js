const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.json());

app.use(express.static(path.resolve(
    __dirname, './client/build'
)));

app.get("/api", (req, res) => {
    res.json({ message: "hello from rrmc server "});
});

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

