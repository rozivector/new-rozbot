//Uptime Robot 24/7 Host
//*************************************************************
const http = require('http');
const express = require('express');
const app = express();

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//*************************************************************