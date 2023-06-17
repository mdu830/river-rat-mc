// const path = require('path');
// const express = require('express');
// const PORT = process.env.PORT || 3000;
// const build = './client/build'

// const app = express();

// // dev routes for client
// app.use(express.static(path.resolve(
//     __dirname, build
// )));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, build, 'index.html'));
//   });

// // server
// app.listen(PORT, (err) => {
//     console.log(`Server listening on PORT ${PORT}`);
// });

// /server.js

const express = require('express')
const path = require("path");
const app = express()

// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('client/public', options))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
  });

const port = process.env.PORT || 3000

// console.log(process.env)

app.listen(port, () => {

  console.log(`React app listening at http://localhost:${port}`)
})
// 