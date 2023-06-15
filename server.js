// Remember to change "nodemon" to "node" of npm start script(package.json) for Production
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "hello from rrmc server "});
});

app.use(express.static(path.resolve(
    __dirname, './client/build'
)));

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

