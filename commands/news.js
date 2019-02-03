const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
                        .setAuthor('NEWS', client.user.displayAvatarURL)
                        .setColor('#FFD800')
                        .addField(`RozBot 3.1 will release soon!`,`We're so excited to make our discord bot using javascript, We're going developing as possible and make them entertainment! So we're planning making more commands like news, hugs, tails, nsfw, and many more! \nDonating bot will our welcome then make they excited! From our statistics, my bot has reached more than 60 servers, 17.000+ user inteact, and 3.700 channels joined! "We're making for good and suitable for user experience!" -Rozi, the bot owner. Rozi will declare that RozBot 3.1 will released on tomorrow or 3rd February. \nBut the owner said, they're still developing for quick.db for making the modlog channel... [Read More...](${'https://rozbot.site123.me/news'})`, true)
                        .setThumbnail("https://cdn-cms.f-static.com/uploads/1710005/800_5c55c7234c75a.png")
                        .setFooter("Saturday, February 2nd, 2019 (11:37 PM, UTC +7)")
  msg.channel.send(embed)
}

module.exports.help = {
  name: "support"
}