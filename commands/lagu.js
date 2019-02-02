// Require Package
const { Client, RichEmbed, MessageEmbed, Util } = require("discord.js");//
const fs = require('fs');
const config = require("../config.json");
// lah gk ada file nya :v

// Ntar kita bikin beberapa args Args itu sesuai message ntar buat args modlog enable dan modlog disable dan modlog channels #channels name

              //ntar dapet liriknya dimana? Manual?

// Run's the command's
exports.run = async(client, msg, args, member) => {
  
    if(msg.author.id != '398845938816516096') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command only for bot creator!");

  
  let rozi = JSON.parse(fs.readFileSync("./rozi.json", "utf8"));
  if(!rozi[msg.guild.id]){ 
      rozi[msg.guild.id] = {
       prefix: config.prefix
     }
  }

if (!args[0]) {
  let embed = new RichEmbed()
  .setColor('RANDOM')
  .setTitle("<===== Lagu Help =====>")
  .setDescription(`${rozi[msg.guild.id].prefix}lagu serigala`)
  
  msg.channel.send(embed); // Test dulu yah!
  } else if(args[0] == 'serigala') {
    let embed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle("U ded soon")
    .setDescription(config.COLOR)
    msg.channel.send(embed)
  }
}

exports.help = {
  name: "modlog",
  description: "send a log from moderation command!"
}