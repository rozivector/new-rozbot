const Discord = require("discord.js");

module.exports.run = (client, message, args) => 
{
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("<:WrongMark:524375774741135362> You don't have this permission!");
  if(!args[0]) return message.channel.sendMessage(":warning: Enter the specify number of messages to delete!");
  message.channel.bulkDelete(args[0]).then(()=>{
    message.channel.sendMessage(`:white_check_mark: Cleared ${args[0]} messages!`).then(message=>message.delete(5000))
  });
}

module.exports.help = {
  name: "clear"
}