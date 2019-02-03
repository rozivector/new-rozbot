const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{
    //if(msg.author.id != '398845938816516096') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");
    if (!msg.channel.nsfw) return msg.channel.sendMessage("<:WrongMark:524375774741135362> You can use this command only in NSFW channels!");
  
    const rando_nsfw_imgs = ["some content picture of nsfw, i should not share the link here!"]; //image content of nsfw
  
  
  let embed = new Discord.RichEmbed()
  .setDescription('<:ahegao:539287647508627466> Lewd time!')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FF4FF0')
        .setImage(rando_nsfw_imgs[Math.floor(Math.random() * rando_nsfw_imgs.length)])
        .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
    msg.channel.sendMessage(embed)
    .then(msg => {msg.react(`💦`)});
    
}
  
  module.exports.help = {
  name: "sonikku"
}
 
