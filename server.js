// Remember to change "nodemon" to "node" of npm start script(package.json) for Production
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});