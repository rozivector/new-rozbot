const Discord = require("discord.js");

const statusAnimation =
{
	'online' : `<:online:504813930313547776>`,
	'idle' : `<:idle:504813930321805333>`,
	'streaming' : `<a:streaming:534281081323782144>`,
	'dnd' : `<:dnd:504813930246438912>`,
	'invisible' : `<:offline:504813929780871191>`,
  'offline' : `<:offline:504813929780871191>`
}

const colorMap =
{
   'online' : '#00FF00',
   'idle' : '#FF8000',
   'streaming' : '#A901DB',
   'dnd' : '#FF0000',
   'invisible' : '#848484',
   'offline' : '#848484'
}

const statusText =
{
	'online' : 'Online',
	'idle' : 'Idle',
	'streaming' : 'Streaming',
	'dnd' : 'Do Not Disturb',
	'invsible' : 'Invisible',
  'offline' : 'Offline'
}

const isBot =
{
	'true' : 'Bot User',
	'false' : 'Regular User'
}

exports.run = async(client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    // Define the member of a guild.
    const member = message.guild.member(user);
  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.tag}`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL)
  .addField("Username", `${user.username}`, true)
  .addField("ID", `${user.id}`, true)
  .addField("Discriminator", `#${user.discriminator}`, true)
  .addField('Nickname', `${member.nickname ? '' + member.nickname + '' : 'None'}`, true)
  .addField("Registered", new Date(user.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
  .addField('Joined', new Date(member.joinedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''), true)
  .addField("Status", statusAnimation[user.presence.status]+' '+statusText[user.presence.status], true)
  .addField("Member Type", isBot[user.bot], true)
  .setColor(colorMap[user.presence.status])
  .setFooter(`Requested By: ${message.author.tag}`)
  message.channel.send(embed);
}

exports.conf = {
   aliases: ['ui']
}

exports.help = {
  name: "userinfo"
}
