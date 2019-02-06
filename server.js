//Uptime Robot 24/7 Host
//*************************************************************
const http = require('http');
const express = require('express');
const app = express();
const content = `<head>
<title>Redirecting...</title>
<font size="4" style="font-family:arial;">
Redirecting to DiscordApp page...
<br />
<a href="https://discordapp.com/api/oauth2/authorize?client_id=481305515092213763&permissions=3532902&scope=bot">Click here</a>, if nothing happens.
<br />
<br />
Powered by: Glitch.com
</font>
  <meta http-equiv='refresh' content='0; URL=https://discordapp.com/api/oauth2/authorize?client_id=481305515092213763&permissions=3532902&scope=bot'>
</head>`;

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.get('/', (request, response) => {
return response.send(content)
});
//*************************************************************
