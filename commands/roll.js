const Discord = require("discord.js");

exports.run = async(client, message, args) => 

{
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage(":game_die: Your dice landed on " +"**"+diceRoll+"**");
}

module.exports.help = {
  name: "roll"
}