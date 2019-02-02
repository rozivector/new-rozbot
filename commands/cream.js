const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
        const rando_crm_imgs = ['https://3.bp.blogspot.com/-A5IPkpaEeXA/W9GaxwmhZoI/AAAAAAAABOc/xhokAyToxU8wuwyaI1jAueG14MlpDctFwCLcBGAs/s320/27710165_1220898834709466_9165884894704787942_o.jpg', 
        'https://1.bp.blogspot.com/-wX5Lqxb5nWQ/W9GaxZRRUCI/AAAAAAAABOY/D8Fg3AxlH9E2iuOzsPvagXuDMHhWVlKVwCLcBGAs/s320/cream_the_rabbit_boom__by_artisticfox321-d777zyj.jpg',
        'https://2.bp.blogspot.com/-7O42b5eQsws/W9GawQvMzCI/AAAAAAAABOU/nmyiAhCcqxA8JZNoeyBv2jUF3iqwn6MeACLcBGAs/s320/cream_the_rabbit_by_georgia_the_hedgehog-d84g4xf.jpg',
        'https://2.bp.blogspot.com/-_0g8hJmamfg/W9GayNmIk7I/AAAAAAAABOg/ws1tTp_98X0ofk0LK4sRX1XrhFicvJfdgCLcBGAs/s320/cream_the_rabbit_by_kojiro_highwind.jpg',
        'https://4.bp.blogspot.com/-4YDExJ-Sy5o/W9GazI2a8DI/AAAAAAAABOk/yiYkfeFvFp0AGk2fa-il0JaebxD2vhdfgCLcBGAs/s320/ff4.jpg',
        'https://1.bp.blogspot.com/-s53vxdatngE/W9Ga013qo2I/AAAAAAAABOs/ZtoLr-wxnBMlKF9xE5ID0VYjlLD0eSwMACLcBGAs/s320/legacy_cream_the_rabbit_render_by_nibroc_rock-db1fbg0.jpg',
        'https://4.bp.blogspot.com/-hXiYRuUivsY/W9Ga0eNoB1I/AAAAAAAABOo/IZS5uV-9Sk8UpxcBJ3RCgTrn_fkNWKC-QCLcBGAs/s320/maxresdefault.jpg',
        'https://4.bp.blogspot.com/-5BpaNbDQNwo/W9Ga1I0abLI/AAAAAAAABOw/jNUpyuTKCZYMWh5RTSzlTOWD_6qnZv6nQCLcBGAs/s320/sonic_boom_cream_by_projectsnt-d785k04.jpg',
        'https://1.bp.blogspot.com/-UseNV1FceTU/W9Ga11ABRYI/AAAAAAAABO0/YB1CDbW-LCghrygnzR5j66VGJjWq6oAsgCLcBGAs/s320/tails___cream_by_bloomphantom-d4zrb6g.jpg',
        'https://1.bp.blogspot.com/-PCocm_h9P6A/W9GbmfUDz0I/AAAAAAAABPI/0lTbHWgMOn8rP9mEBHSHRtMgVQgF3i5wwCLcBGAs/s320/cream_the_rabbit_and_cheese_in_sonic_forces_by_thezetoblade-dbhtef3.jpg',
        'https://1.bp.blogspot.com/-yIJrTtReetc/W9GcNtO6hHI/AAAAAAAABPQ/E4GS6U8My7gV9iaNFal5Xl0fLVY2qu7PQCLcBGAs/s320/WhatsApp%2BImage%2B2018-10-25%2Bat%2B17.29.59.jpeg',
        'https://3.bp.blogspot.com/-pBWAqyjaMbY/W9GcN09VkoI/AAAAAAAABPU/7Cuf_s-Vk8MPFrYmk0epTizC7pN7vbAXwCLcBGAs/s320/WhatsApp%2BImage%2B2018-10-25%2Bat%2B17.30.24.jpeg',
        'https://3.bp.blogspot.com/-rF8nNsOpslk/W9GcNxj4LaI/AAAAAAAABPY/tUtceNQr5R87ZmkSnXK7g8kLp4k-JmhLACLcBGAs/s1600/WhatsApp%2BImage%2B2018-10-25%2Bat%2B17.31.03.jpeg',
        'https://cdn.discordapp.com/attachments/535027866459701268/536841145796526080/6e9.png',
        'https://cdn.discordapp.com/attachments/535027866459701268/536841177857654784/cream.png',
        'https://cdn.discordapp.com/attachments/535027866459701268/536841180869165066/winter_cream_the_rabbit_2017_render_by_nibroc_rock_dby9r4g-pre.png',
        'https://cdn.discordapp.com/attachments/535027866459701268/536841194559373312/hug_me__by_gmt_gabigabriela-d4j4a7b.png',
        'https://cdn.discordapp.com/attachments/535027866459701268/536843660281643042/creams.jpg'                        
        ];
  
  
  let embed = new Discord.RichEmbed()
  .setDescription(':smile: Be nice friend!')
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('#FAFF00')
        .setImage(rando_crm_imgs[Math.floor(Math.random() * rando_crm_imgs.length)])
    msg.channel.sendMessage(embed)
    .then(msg => {
    msg.react('❤')});
}

module.exports.help = {
  name: "cream"
}