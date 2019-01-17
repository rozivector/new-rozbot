module.exports.run = (client, message, args) => {
 let say = args.join(' ');
 if (!say) return message.channel.send(":warning: Please specify a text!");
 message.delete();
 message.channel.send(say)
}

module.exports.help = {
  name: "say"
}