const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('#FFD800')
  .setAuthor("HELP COMMAND - RozBot V 3.1", "https://cdn.discordapp.com/attachments/535027866459701268/535715586349465621/orange-question-mark-icon-png-clip-art-30.png")
  .addField(":smile: Fun", "Flip, Hack, Reverse, Meter, Tails, Cream, Rabbit, Hug")
  .addField("⛏ Utility", "Say, Roll, Avatar, Userinfo, Serverinfo, Servericon, Ping, Guild")
  .addField(":lock: Moderation", "Ban, Kick, Warn, Clear, Unban, Prefix")
  .addField("<:18_only:539289695901974528> NSFW", "Sonikku")
  .addField("🎵 Music", "Loop, Np, Pause, Play, Queue, Resume, Skip, Stop, Volume")
  .addField("<a:sevistyping:539290497336999951> Miscellaneous", `News, Invite, Support, Leaderboard, [More Commands...](${'https://rozbot.site123.me/commands'})`)
  .setFooter("Made with discord.js | Bot Owner: Rozi Vector#6255")
  
  msg.channel.send(embed)
}