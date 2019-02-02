// Require Packages
const { Util, RichEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const DBL = require("dblapi.js");
const client = new Discord.Client({disableEveryone: true});
const dbl = new DBL(process.env.dbl, client);
const db = require('quick.db');
const queue = new Map();
const fs = require("fs");
const config = require("./config.json");
const botOwner = '398845938816516096';
client.modlog = new db.table("ModLogTeam");
client.config = config;

require("./server.js");

function changing_status() {
  let statdetail = [' | r!help | V 2.5'];
  let status = [`Type r!help`+statdetail, 
                `with ${client.users.size.toLocaleString()} users`+statdetail, 
                `with ${client.guilds.size.toLocaleString()} servers`+statdetail, 
                `with ${client.channels.size.toLocaleString()} channels`+statdetail, 
                `Rozi Vector#6255`+statdetail, 
                `Justice`+statdetail, 
                `24/7 Support`+statdetail]
  let random = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(random);
}

dbl.on('posted', () => {
  console.log("All has been posted");
})

client.on('ready', () => {
  console.log("Ready!")
   client.user.setStatus('idle'); // Can be 'online', 'idle', 'dnd', or 'invisible'
    setInterval(changing_status, 7000)
});

client.on('message', async msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;

// Start of code Prefix Json
  let rozi = JSON.parse(fs.readFileSync("./rozi.json", "utf8"));
  if(!rozi[msg.guild.id]){
     rozi[msg.guild.id] = {
       prefix: config.prefix
     }
  }
// End of code Prefix Json

// Start of code Mention Bot
  if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
    let tagEmbed = new Discord.RichEmbed()
    .setThumbnail(client.user.displayAvatarURL) // ok!
    .setColor('#FFD800')
    .setTitle(`${client.user.username} Prefix`)
    .setDescription(`Global Prefix =  (**r!**) \nPrefix In This Server =  (**${rozi[msg.guild.id].prefix}**)`)
    .setFooter(`To view help commands, type ${rozi[msg.guild.id].prefix}help`)
    msg.channel.send(tagEmbed);
}
// End of code Mention Bot
  
  let prefix = rozi[msg.guild.id].prefix;
  if(!msg.content.startsWith(prefix)) return;
  var messageArray = msg.content.split(" ");
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var searchString = messageArray.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  console.log(searchString);
  var serverQueue = queue.get(msg.guild.id);
  var sender = msg.author;
  var cmd = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args);
    
  } catch (e) {
    console.log(e.stack);
  } finally {
    console.log(`${msg.author.tag} has using ${cmd}'s command`);
  }

// Music Command
// ============================================================================================================================================
});
exports.handleVideo = handleVideo;
exports.queue = queue;

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
    uploaded: video.channel.title,
    authors: message.author,
    create: (video.publishedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    voicechan: message.member.voiceChannel.name,
    durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
    channel: `https://www.youtube.com/channel/${video.channel.id}`,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    duration: video.duration
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
      member: message.author,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
    loop: false,
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
    
    var addedembed = new RichEmbed()
    .setColor('#FAFF00')
    .setAuthor(`Added Queue:`, 'https://cdn.discordapp.com/attachments/535027866459701268/535279847065518092/Music-icon.png')
    .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
    .setDescription(`**[${song.title}](${song.url})**`)
    .addField(":clock3: Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
    .addField('<:YouTube:506769226766483457> Uploaded by:', `**[${song.uploaded}](${song.channel})**`, true)
    .addField(':loud_sound: Voice Channel:', song.voicechan, true)
    .addField('<:user:534953608660123648> Requested By:', song.authors.tag, true)
    .addField(':calendar_spiral: Uploaded At:', song.create, true)
    .addField(':signal_strength: Current Volume:', `${serverQueue.volume}%`, true)
    .setTimestamp();
    
		return message.channel.send(addedembed);
	}
	return undefined;
}

function play(guild, song, message) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
}
	console.log(serverQueue.songs);

	 const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { quality: 'highestaudio' }))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
      const shifed = serverQueue.songs.shift();
      if(serverQueue.loop) serverQueue.songs.push(shifed);
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
  
  var playembed = new RichEmbed()
  .setColor('#FAFF00')
  .setAuthor(`Start Playing:`, 'https://cdn.discordapp.com/attachments/535027866459701268/535279847065518092/Music-icon.png')
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setDescription(`**[${song.title}](${song.url})**`)
  .addField(":clock3: Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
  .addField('<:YouTube:506769226766483457> Uploaded by:', `**[${song.uploaded}](${song.channel})**`, true)
  .addField(':loud_sound: Voice Channel:', song.voicechan, true)
  .addField('<:user:534953608660123648> Requested By:', song.authors.tag, true)
  .addField(':calendar_spiral: Uploaded At:', song.create, true)
  .addField(':signal_strength: Current Volume:', `${serverQueue.volume}%`, true)
  .setTimestamp();
  
	serverQueue.textChannel.send(playembed);
}
// ============================================================================================================================================

client.login(process.env.BOT_TOKEN);