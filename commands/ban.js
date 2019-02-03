const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //let botPos = target.highestRole.calculatedPosition;
    let reason = args.slice(1).join(' ');
    
    if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id != '398845938816516096') return message.channel.send("<:WrongMark:524375774741135362> You don't have permission to ban a member!");
    if(!target) return message.channel.send(":warning: Please specify a valid member to ban!");
    if(!reason) return message.channel.send(":warning: Please specify a reason for this ban!");
    if(message.author.id === target.id) return message.channel.send("<:WrongMark:524375774741135362> That's suicide man, i can't do that!");
    if(target.highestRole.position >= message.member.highestRole.position) { return message.channel.send("<:WrongMark:524375774741135362> You can't ban with higher role than you!"); }
    if(!target.bannable) return message.channel.send("<:WrongMark:524375774741135362> I can't ban this member!");

    var embedColor = '#FAFF00';
    var banEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Banned member', `${target.user.username}#${target.user.discriminator} with an ID: ${target.user.id}`)
        .addField('Banned by', `${message.author.username}#${message.author.discriminator} with an ID: ${message.author.id}`)
        .addField('Reason:', reason)
        .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535421974143303680/5Z30.gif')
        .setTimestamp();
  
  var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .addField('Banned by', message.author.tag)
        .addField('Reason:', reason)
        .setImage('https://cdn.discordapp.com/attachments/535027866459701268/535421974143303680/5Z30.gif')
        .setTimestamp();
  
    target.ban(reason).then(target => target.send(`<:scaryrabbit:467816313205686292> <:ban:525276803623813130> You've been banned in **${message.guild.name}**!`, warningEmbed));
    return message.channel.send(`<:scaryrabbit:467816313205686292> :thumbsup: User Successfully Banned!`, banEmbed);
    message.delete();
  
  if(message.author.id === '398845938816516096')
    {
    message.channel.send(":white_check_mark: **Bot Owner** bypass Server's permission!");
    }
}

module.exports.help = {
  name: "ban"
}