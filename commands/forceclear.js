const Discord = require("discord.js");

module.exports.run = (client, message, args) => 
{
  if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command only for bot creator!");
  if(!args[0]) return message.channel.sendMessage(":warning: Enter the specify number of messages to delete!");
  message.channel.bulkDelete(args[0]).then(()=>{
    message.channel.sendMessage(`:white_check_mark: **Bot Owner** bypass Server's permission \n:white_check_mark: Cleared ${args[0]} messages!`).then(message=>message.delete(7000))
  });
}

module.exports.help = {
  name: "forceclear"
}