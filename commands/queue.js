const { queue } = require("../index.js");

exports.run = async(client, msg, args) => {
  var serverQueue = queue.get(msg.guild.id);
  
  if (!serverQueue) return msg.channel.send(':warning: There is nothing to playing.');
		return msg.channel.send(`
__**Song Queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now Playing:** ${serverQueue.songs[0].title}
		`);
	}

exports.help = {
  name: "queue"
}