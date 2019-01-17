const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  if(msg.author.id != '398845938816516096') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command only for bot creator!");
  
  msg.channel.sendMessage("I got it!")

}