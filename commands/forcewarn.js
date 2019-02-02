const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var embedColor = '#FAFF00' // Change this to change the color of the embeds!
    
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(embedColor)
        .setTitle('')
        .setDescription('<:WrongMark:524375774741135362> **Missing Arguments!** \n\n Usage: `r!warn [@User] [Reason]`')
    if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command only for bot creator!"); // Checks if the user has the permission
    let mentioned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); // Gets the user mentioned!
    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
    if(!reason) return message.channel.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

    var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Warned by', message.author.tag)
        .addField('Reason:', reason)
        .setTimestamp();
    mentioned.send(`<:scaryrabbit:467816313205686292> You've been warned in **${message.guild.name}**! \n`, warningEmbed); // DMs the user the above embed!
    message.channel.send(":white_check_mark: **Bot Owner** bypass Server's permission \n<:scaryrabbit:467816313205686292> :thumbsup: User Successfully Warned!");
    message.delete();
}

module.exports.help = {
  name: "forcewarn"
}