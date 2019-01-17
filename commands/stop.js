// Require Data
const { queue } = require("../index.js");

// Run's Stop Command
exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
  
    if (!msg.member.voiceChannel) return msg.channel.send('<:WrongMark:524375774741135362> You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send(':warning: There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(':warning: Stop command has been used!');
    return msg.channel.send(":stop_button: Song has been stopped!");
		return undefined;
	}

exports.conf = {
  aliases: ['st']
}

exports.help = {
  name: "stop"
}