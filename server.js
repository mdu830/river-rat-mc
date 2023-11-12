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
  max: 1,
  standardHeaders: true,
  legacyHeaders: false

});

app.use(express.static('./client/build', options.index,), reqLimit)

app.set('trust proxy', '127.0.0.1');

app.get('/', reqLimit, (req, res) => {
  const index = path.join(__dirname, 'client/build', 'index.html');

  // const ip = req.ip; // trust proxy sets ip to the remote client (not to the ip of the last reverse proxy server)
  // if (ip.substr(0,7) == '::ffff:') { // fix for if you have both ipv4 and ipv6
  //   ip = ip.substr(7);
  // }
  // res.json({"ip": ip, "protocol": req.protocol, "headers": req.headers['x-forwarded-for']});
  res.sendFile(index);
});

app.get('*', reqLimit, (req, res) => {
  const index = path.join(__dirname, 'client/build', 'index.html');
  const ip = req.ip; // trust proxy sets ip to the remote client (not to the ip of the last reverse proxy server)
  if (ip.substr(0,7) == '::ffff:') { // fix for if you have both ipv4 and ipv6
    ip = ip.substr(7);
  }
  res.json({"ip": ip, "protocol": req.protocol, "headers": req.headers['x-forwarded-for']});
  res.sendFile(index);
});

const port = process.env.PORT

app.listen(port, () => {
  
  console.log(`Server listening at http://localhost:${port}`)
})

