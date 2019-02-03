const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
        const rando_rbt_imgs = ['some rabbit pictures']; //link image content of rabbits
  
  
  let embed = new Discord.RichEmbed()
  .setDescription(':rabbit: Cute time! :smile:' )
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FAFF00')
        .setImage(rando_rbt_imgs[Math.floor(Math.random() * rando_rbt_imgs.length)])
        .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
    msg.channel.sendMessage(embed)
    .then(msg => {
    msg.react('🥕')});
}

module.exports.help = {
  name: "rabbit"
}
