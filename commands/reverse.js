var flip = require('flip-text');


module.exports.run = (client, message, args) => {
 let say = args.join(' ');
 if (!say) return message.channel.send(":warning: Please specify a text!");
  message.channel.send(flip(say));
}

module.exports.help = {
  name: "reverse"
}