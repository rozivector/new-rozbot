const { queue } = require("../index.js");

 exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
    
    if (!msg.member.voiceChannel) return msg.channel.send('<:WrongMark:524375774741135362> You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send(':warning: There is nothing playing.');
		if (!args[0]) return msg.channel.send(`:signal_strength: The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[0];
    if (args[0] > 100) return msg.channel.send(`Hey, ${msg.author} The volume limit is 100%!`);
     serverQueue.volume = args[0];
		if (args[0] > 100) return !serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100) +
    msg.channel.send(`Hey, ${msg.author} The volume limit is 100%!`)
    if (args[0] < 101) return serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100) + msg.channel.send(`:signal_strength: I set the volume to: **${args[0]}**%`);
}

exports.conf = {
  aliases: ['vl']
}

module.exports.help = {
  name: "volume"
}