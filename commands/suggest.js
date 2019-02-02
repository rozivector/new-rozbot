const Discord = require('discord.js');
exports.run = (client, message, args) => {


if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");
    let suggest = args.join(' ');
    let ownerID = client.config.ownerID;
    if (!suggest) return message.channel.send(":warning: Please enter the message, so we can response it!");

    var embedColor = '#FAFF00';
  
  var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('User sent', message.author.tag, true)
        .addField('User ID sent', message.author.id, true)
        .addField('Server', `${message.guild.name}`, true)
        .addField('Server ID', `${message.guild.id}`, true)
        .addField('Message:', suggest, true)
        .setTimestamp();
  
  message.channel.send(`:white_check_mark: Thank you for your suggestion, we will review it ASAP! \nBot owner: <@${ownerID}>`)
  .then(ownerID => ownerID.send(`:information_source: We have message suggest from ${message.author.tag}! + ${warningEmbed}`));
 



}