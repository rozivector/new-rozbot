const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let start = Date.now(); 
  message.channel.send(':hourglass:  **Pinging...**').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setColor("#FFD800")
        .setAuthor("PONG!")
        .addField(":signal_strength: Latency", `\`${diff} ms\``, true)
        .addField("💻 API", `\`${API} ms\``, true)
        message.delete();
        message.channel.send(embed);
  })
  
  
}

module.exports.help = {
  name: "ping"
}