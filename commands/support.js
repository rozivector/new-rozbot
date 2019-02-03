const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setAuthor('Support our bot!', client.user.displayAvatarURL)
                        .setDescription("Here's the special perks:")
                        .setColor('#FFD800')
                        .addField('<:addrobot:514940409043222538> Invite bot', `[Click here](${'https://discordapp.com/api/oauth2/authorize?client_id=481305515092213763&permissions=3532902&scope=bot'})`, true)
                        .addField(':earth_asia: Join my server', `[Click here](${'https://discord.gg/WJjvA7p'})`, true)
                        .addField(':pencil: Contact us', `[Click here](${'https://goo.gl/forms/0km4ybWuVWLQ83T33'})`, true)
                        .addField('<:YouTube:506769226766483457> My Channel', `[Click here](${'https://www.youtube.com/user/rozivector1999'})`, true)
                        .addField('<:twitch:506770621498392594> My Streaming', `[Click here](${'https://www.twitch.tv/rozivector'})`, true)
                        .addField('<:GitHub:514935374037123093> My GitHub', `[Click here](${'https://github.com/rozivector'})`, true)
                        .setFooter("Now support 24/7 online bot! Made with discord.js")
  msg.channel.send(embed)
}

module.exports.help = {
  name: "support"
}