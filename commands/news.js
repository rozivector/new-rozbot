const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
                        .setAuthor('NEWS', client.user.displayAvatarURL)
                        .setColor('#FFD800')
                        .addField(`The title of news`,`The short content of news`, true)
                        .setThumbnail("The picture of news")
                        .setFooter("The date of news")
  msg.channel.send(embed)
} //the news is changed everyday even the author of news

module.exports.help = {
  name: "support"
}
