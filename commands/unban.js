const Discord = require('discord.js');
exports.run = (client, message, args) => {
    //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");
    let user = args[0];
    let reason = args.slice(1).join(' ');
    
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("<:WrongMark:524375774741135362> You don't have permission to unban a member!");
    if(!user) return message.channel.send(":warning: Please specify an ID user to unban!");
    if(user == message.mentions.users.first() ) return message.channel.send(":warning: Only works with ID number, not mention!");
    if(!reason) return message.channel.send(":warning: Please specify a reason for this unban!");
    //if(!user.member) return message.channel.send(":warning: Can't find ID user to unban!");

    var embedColor = '#FAFF00';
    var unbanEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Unbanned member', `<@${user}>`)
        .addField('Unbanned by', `${message.author.username}#${message.author.discriminator} with an ID: ${message.author.id}`)
        .addField('Reason:', reason)
        .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Unbanned by', message.author.tag)
        .addField('Reason:', reason)
        .setTimestamp();
  
    message.guild.unban(user, reason).then(user => user.send(`:information_source: You've been unbanned in ${message.guild.name}!`, warningEmbed));
    message.delete();
    return message.channel.send(`:information_source: User has successfully unbanned!` ,unbanEmbed);
    
}

module.exports.help = {
  name: "unban"
}