const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let start = Date.now(); 
  message.channel.send(':ping_pong: **PONG!**').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setColor("#FFD800")
        .addField(":signal_strength: Your ping", `\`${diff} ms\``, true)
        .addField("💻 API", `\`${API} ms\``, true)
        .setFooter('RozBot Version 2.5', client.user.displayAvatarURL)
        message.channel.send(embed);
})
}