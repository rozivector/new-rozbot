const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
        const rando_tls_imgs = ['https://cdn.discordapp.com/attachments/535027866459701268/536845771736088577/tails_by_splushmaster12-daw5vwf.jpg',
                                'https://cdn.discordapp.com/attachments/535027866459701268/536845803679907840/tails_the_fox_by_tanyatackett-daseqj0.jpg',
                                'https://cdn.discordapp.com/attachments/535027866459701268/536845813180268546/Tails-8-Bit.png',
                                'https://cdn.discordapp.com/attachments/535027866459701268/536845843286851614/tails_genius.gif',
                                'https://cdn.discordapp.com/attachments/535027866459701268/536845876333903872/tails_panic.gif',
                                'https://cdn.discordapp.com/attachments/535027866459701268/536852030476648448/Classic_tails.png',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855780633214976/50095645_1009322062600647_4687050737283235840_o.jpg',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855798454812672/49597606_1001521846714002_761826915119005696_n.jpg',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855804792537109/49268391_1001594573373396_9129400815298019328_n.jpg',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855809091567617/49719601_1001519956714191_44417606882426880_o.jpg',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855808978452500/50083648_1010432949156225_844969325826670592_o.jpg',
                                'https://cdn.discordapp.com/attachments/498062980664262666/536855821758234626/50314533_1011628465703340_814977912796086272_n.png'
        ];
  
  
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