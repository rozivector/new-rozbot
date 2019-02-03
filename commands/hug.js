const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
        //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");

        let user = message.mentions.users.first()
        let act = 'You have been hugged by '
        const rando_hug_imgs = ["https://cdn.discordapp.com/attachments/535027866459701268/540522110695636992/hugs.png",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511489182367764/49505751_2182507138627935_7846664084059346402_n.jpg",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511489979416578/49287557_1086721364833443_2634241362269548647_n.jpg",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511496618868736/49637385_342675072989775_8381735262803121145_n.jpg",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511504621469715/crystal_hugging_your_oc_collab_by_katetheraccoon-dawrwf0.png",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511511290544149/DtQbj-1XgAA6E8s.jpg",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511529921511424/1258945.jpeg",
                               "https://cdn.discordapp.com/attachments/535027866459701268/541511518668193793/7262aeb6294215389c69b00e890c1cea.png"];
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