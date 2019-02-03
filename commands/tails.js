const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
        const rando_tls_imgs = ['some content picture of miles tails prower']; //link picture content of miles tails prower
  
  
  let embed = new Discord.RichEmbed()
  .setDescription('<a:happytails:536846737990615050> Alright, time to fly!')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FAFF00')
        .setImage(rando_tls_imgs[Math.floor(Math.random() * rando_tls_imgs.length)])
        .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
    msg.channel.sendMessage(embed)
    .then(msg => {
    msg.react(`536846279125499906`)});
}

module.exports.help = {
  name: "tails"
}
