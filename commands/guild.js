const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{
    msg.channel.sendMessage("I'm in " + `${client.guilds.size}` + " servers!")
}

module.exports.help = {
  name: "guild"
}