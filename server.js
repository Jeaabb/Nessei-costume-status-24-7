const express = require('express')
const server = express();

server.all('/', (req, res) => {
  res.send("[K]")
});

function keepAlive(){
  server.listen(3000, ()=>{console.log("READY")});
};

module.exports = keepAlive;
