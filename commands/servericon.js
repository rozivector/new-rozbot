const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send(":hourglass: Generating icon...");

if(!message.guild.iconURL) return msg.edit("<:WrongMark:524375774741135362> No icon found!");

let iconembed = new Discord.RichEmbed()
.setColor('#FAFF00')
.setFooter("Requested by " + message.author.tag)
.setImage(message.guild.iconURL+'?size=1024')
.setTitle(`Here is the server icon of ${message.guild.name}`)
.setDescription("[Icon URL link]("+message.guild.iconURL+'?size=1024'+")")

message.channel.send(iconembed)
msg.delete();
 }

module.exports.help = {
  name: "servericon"
}
