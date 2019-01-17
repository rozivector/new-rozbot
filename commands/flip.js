const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{
var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            const embed = new Discord.RichEmbed()
            .setDescription(":taurus: Your coin landed on Heads!")
            .setColor('#FAFF00')
            .setImage("https://4.bp.blogspot.com/-LQGpRKEEghA/W9chDLzcW5I/AAAAAAAABSA/vtiitM-yazwjogWfYHkplUBD0M7-TeHyACLcBGAs/s1600/coin_heads.png")
            msg.channel.sendMessage(embed);
        }
        else
        {
            const embed = new Discord.RichEmbed()
            .setDescription(":sagittarius: Your coin landed on Tails!")
            .setColor('#FAFF00')
            .setImage("https://3.bp.blogspot.com/-ZJzZQJXFPkc/W9chDAifa_I/AAAAAAAABSE/GptuKSJBOoIdoUNxZIyeSbhx2TXDW3aDwCLcBGAs/s1600/coin_tails.png")
            msg.channel.sendMessage(embed);
        }
  
}

module.exports.help = {
  name: "flip"
}