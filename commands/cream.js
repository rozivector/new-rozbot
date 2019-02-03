const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
        const rando_crm_imgs = ['some content of cream the rabbit images']; //link image content of cream the rabbit
  
  
  let embed = new Discord.RichEmbed()
  .setDescription(':smile: Be nice friend!')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FAFF00')
        .setImage(rando_crm_imgs[Math.floor(Math.random() * rando_crm_imgs.length)])
        .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
    msg.channel.sendMessage(embed)
    .then(msg => {
    msg.react('❤')});
}

module.exports.help = {
  name: "cream"
}
