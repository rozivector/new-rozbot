const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{
    //if(msg.author.id != '398845938816516096') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");
    if (!msg.channel.nsfw) return msg.channel.sendMessage("<:WrongMark:524375774741135362> You can use this command only in NSFW channels!");
  
    const rando_nsfw_imgs = ["https://cdn.discordapp.com/attachments/465045722392297472/539284394687332367/6be53a2fd8f29e7b7ddd76db67a6d90b90881bb8.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284394037215233/961e18af4e14a2bba91b7cb3501f6f12.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284392548368392/902b916dcf7ae12364bbae664a65508a.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284389922865162/3d5a5ca193a4a504d88f677378a6dfc2907925c0.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284389100650517/7e6bae921295db4c8cb303770675015c.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284377197084682/image0.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284371379847188/bdc4cbbc6e02951459c425c9474fb1ffb4713fef.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284370150653973/download.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539284366321385483/1549ef7d892d9dee729b9756f9bba7b7.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539298530716549133/2b096087806ad7dd9bc792ef66fd2ba2def03329.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539454830524104735/FB_IMG_1548565026009.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539456592148693049/xylas_Vanilla_upview.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539457084068986887/3adc8e3fb057228a30dbbcfae2293a0a.jpg",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539457790947753987/1546090763769.png",
                             "https://cdn.discordapp.com/attachments/465045722392297472/539459091035324447/sample_d4c8d00c99ce57465ad79e968ea1a714.jpg"
                            ];
  
  
  let embed = new Discord.RichEmbed()
  .setDescription('<:ahegao:539287647508627466> Lewd time!')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FF4FF0')
        .setImage(rando_nsfw_imgs[Math.floor(Math.random() * rando_nsfw_imgs.length)])
        .setFooter("Have image to submit? Send it to Rozi Vector#6255!")
        //.setFooter("🔨 Under development, support RozBot to add more nsfw pictures!")
    msg.channel.sendMessage(embed)
    .then(msg => {msg.react(`💦`)});
  
  module.exports.help = {
  name: "sonikku"
}
  
  
    //if (!msg.channel.nsfw) return
}