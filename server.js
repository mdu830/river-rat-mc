const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.json());

app.use(express.static(path.resolve(
    __dirname, './client/public'
)));

app.get("/api", (req, res) => {
    res.json({ message: "hello from rrmc server "});
});

app.get('/', (req,res) => {
    res.sendFile(path.join(
        __dirname, './client/public', 'index.html'
        ));
        console.log(res)
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

