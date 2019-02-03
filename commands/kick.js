const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //let botPos = target.highestRole.calculatedPosition;
    let reason = args.slice(1).join(' ');
    
    if(!message.member.hasPermission('KICK_MEMBERS') && message.author.id != '398845938816516096') return message.channel.send("<:WrongMark:524375774741135362> You don't have permission to kick a member!");
    if(!target) return message.channel.send(":warning: Please specify a valid member to kick!");
    if(!reason) return message.channel.send(":warning: Please specify a reason for this kick!");
    if(!target.member(args[0])) return message.channel.send(":warning: I cannot found that member!");
    //if(!client.hasPermission('KICK_MEMBERS')) return message.channel.send("<:WrongMark:524375774741135362> I must have grant access to kick members!");
    if(message.author.id === target.id) return message.channel.send("<:WrongMark:524375774741135362> That's suicide man, i can't do that!");
    if(target.highestRole.position >= message.member.highestRole.position) { return message.channel.send("<:WrongMark:524375774741135362> You can't kick with higher or equals role than you!"); }
    if(!target.kickable) return message.channel.send("<:WrongMark:524375774741135362> I can't kick this member!");
      else if(message.author.id == message.guild.owner.user.id)
  
    var embedColor = '#FAFF00';
    var kickEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Kicked member', `${target.user.username}#${target.user.discriminator} with an ID: ${target.user.id}`)
        .addField('Kicked by', `${message.author.username}#${message.author.discriminator} with an ID: ${message.author.id}`)
        .addField('Reason:', reason)
        .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535422075410710528/DKSm.gif')
        .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Kicked by', message.author.tag)
        .addField('Reason:', reason)
        .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535422075410710528/DKSm.gif')
        .setTimestamp();
  
    target.kick().then(target => target.send(`<:scaryrabbit:467816313205686292> You've been kicked in **${message.guild.name}**!`, warningEmbed));
    return message.channel.send(`<:scaryrabbit:467816313205686292> :thumbsup: User Successfully Kicked!`, kickEmbed);
    
    message.delete();

    if(message.author.id === '398845938816516096')
    {
    message.channel.send(":white_check_mark: **Bot Owner** bypass Server's permission!");
    }
}

module.exports.help = {
  name: "kick"
}