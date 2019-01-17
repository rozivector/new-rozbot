const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('#FFD800')
  .setTitle(":blue_book: HELP COMMAND - RozBot V 2.5")
  .addField(":smile: Fun", "Flip, Hack, Reverse, Meter, Cream, Rabbit")
  .addField("⛏ Utility", "Say, Roll, Avatar, UserInfo, ServerInfo, Ping, Invite, Support")
  .addField(":lock: Moderation", "Clear, Prefix")
  .addField("🎵 Music", "Loop, Np, Pause, Play, Queue, Resume, Skip, Stop, Volume")
  .setFooter("Made with discord.js | Bot Owner: Rozi Vector#0101")
  
  msg.channel.send(embed)
}