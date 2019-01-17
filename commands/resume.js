const { queue } = require("../index.js");

exports.run = async(client, msg, args) => {
  var serverQueue = queue.get(msg.guild.id);
  
  if (serverQueue && !serverQueue.playing) {
      if (!msg.member.voiceChannel) return msg.channel.send('<:WrongMark:524375774741135362> You are not in a voice channel!');
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send(':warning: There is nothing playing.');
	}

exports.help = {
  name: "resume"
}