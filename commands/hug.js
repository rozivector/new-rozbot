const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
        //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");

        let user = message.mentions.users.first()
        let act = 'You have been hugged by '
        const rando_hug_imgs = ["some content of hug pictures"]; //link picture content of hug
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: Hugs you`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
  
  else if(user.id === '481305515092213763')
  {
    let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: Awww... you're so sweet!`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: ${user.username}#${user.discriminator}, ${act}${message.author.tag}`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
}

module.exports.help = {
  name: "tails"
}
