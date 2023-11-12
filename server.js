const express = require('express')
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit")
dotenv.config();

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}

const reqLimit = rateLimit({

  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false

});

app.use(express.static('./client/build', options.index,), reqLimit)

app.get('/', reqLimit, (req, res) => {
  const index = path.join(__dirname, 'client/build', 'index.html');
  res.sendFile(index);
});

app.get('*', reqLimit, (req, res) => {
  const index = path.join(__dirname, 'client/build', 'index.html');
  res.sendFile(index);
});

const port = process.env.PORT

app.listen(port, () => {
  
  console.log(`Server listening at http://localhost:${port}`)
})

