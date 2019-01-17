const Discord = require("discord.js");
const ColorMap =
{
    'online' : '#00FF00',
    'idle' : '#FF8000',
    'streaming' : '#A901DB',
    'dnd' : '#FF0000',
    'offline' : '#848484'
};
const ngebot =
{
    'true' : 'Bot User',
    'false' : 'Regular User'
};
const statusAnimation =
{
	'online' : `<:online:504813930313547776>`,
	'idle' : `<:idle:504813930321805333>`,
	'streaming' : `<a:streaming:534281081323782144>`,
	'dnd' : `<:dnd:504813930246438912>`,
	'invisible' : `<:offline:504813929780871191>`,
  'offline' : `<:offline:504813929780871191>`
};

const StatusText =
{
    'online' : 'Online',
    'idle' : 'Idle',
    'dnd' : 'Do Not Disturb',
    'offline' : 'Offline',
    'streaming' : 'Streaming'
}
const verlev =
{
    '0' : 'None',
    '1' : 'Low',
    '2' : 'Medium',
    '3' : 'High',
    '4' : 'Very High'

}


const servico =
{
    'singapore' : ':flag_sg: Singapore',
    'brazil' : ':flag_br: Brazil',
    'eu-central' : ':flag_eu: Central Europe',
    'hongkong' : ':flag_hk: Hong Kong',
    'japan' : ':flag_jp: Japan',
    'russia' : ':flag_ru: Russia',
    'southafrica' : ':flag_za: South Africa',
    'sydney' : ':flag_au: Sydney, Australia',
    'us-central' : ':flag_us: US Central',
    'us-east' : ':flag_us: US East',
    'us-south' : ':flag_us: US South',
    'us-west' : ':flag_us: US West',
    'eu-west' : ':flag_eu: Western Europe'
}
module.exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name}`, `${message.guild.iconURL ? message.guild.iconURL : ""}`)
  .setDescription('Here is the server information: ')
  .setThumbnail(`${message.guild.iconURL ? message.guild.iconURL : ""}`)
  .addField('Server Name: ', message.guild.name, true)
  .addField('Server ID: ', message.guild.id, true)
  .addField('Server Owner: ', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField('Server Region: ', servico[`${message.guild.region}`], true)
  .addField('Members: ', `**${message.guild.memberCount}** Users \n**${message.guild.memberCount - message.guild.members.filter(mb => mb.user.bot).size}** Humans \n**${message.guild.members.filter(mb => mb.user.bot === true).size}** Bots \n**${message.guild.members.filter(members => members.presence.status == 'online').size}** ${statusAnimation.online} Online \n**${message.guild.members.filter(members => members.presence.status == 'idle').size}** ${statusAnimation.idle} Idle \n**${message.guild.members.filter(members => members.presence.status == 'dnd').size}** ${statusAnimation.dnd} Do Not Disturb \n**${message.guild.members.filter(members => members.presence.status == 'offline').size || message.guild.members.filter(members => members.presence.status == 'invisible').size}** ${statusAnimation.invisible} Offline`, true)
  .addField('Channels: ', `**${message.guild.channels.findAll("type", "text").length}** Text \n**${message.guild.channels.findAll("type", "voice").length}** Voice \n**${message.guild.channels.findAll("type", "category").length}** Category`, true)
  .addField('Server Roles: ', `${message.guild.roles.size}`, true)
  .addField('Server Emojis: ', `${message.guild.emojis.size}`, true)
  .addField('Verification Level: ', verlev[`${message.guild.verificationLevel}`], true)
  .addField('Server Created: ', new Date(message.guild.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
  .setColor('#FFD800')
  message.channel.sendMessage(embed)
}

module.exports.help = {
  name: "serverinfo"
}