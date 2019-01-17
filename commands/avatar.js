const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
         .setDescription(`Here's the avatar: \n[Download](${user.avatarURL})`)
         .setAuthor(`${user.username}#${user.discriminator}`, client.user.displayAvatarURL)
         .setImage(user.displayAvatarURL)
         .setColor('RANDOM')
message.channel.sendMessage(embed)

}

exports.help = {
  name: "avatar"
}