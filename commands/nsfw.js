const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{

    if (!msg.channel.nsfw) return msg.channel.sendMessage("<:WrongMark:524375774741135362> You can use this command only in NSFW channels!");
    msg.channel.sendMessage(":warning: _Under cumstruction!_");
    //to be continued
}