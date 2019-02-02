const db = require("quick.db");
const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

exports.run = async(client, msg, args) => {
  
  if(msg.author.id != '398845938816516096' && msg.author.id != '297130271864520705') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");
  let rozi = JSON.parse(fs.readFileSync("./rozi.json", "utf8"));
  if(!rozi[msg.guild.id]){
     rozi[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  if(!args[0]) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${rozi[msg.guild.id].prefix}modlog on \n${rozi[msg.guild.id].prefix}modlog off \n${rozi[msg.guild.id].prefix}modlog channel #channel \n \nExample: \n${rozi[msg.guild.id].prefix}modlog channel #logs`)
    msg.channel.send(embed)
  } else if(args[0] == 'on') {
    msg.channel.send("Modlog enabled!");
  } else if(args[0] == 'off') {
    msg.channel.send("Modlog disabled!");
  } else if(args[0] == 'channel') {
    var channel = msg.mentions.channels.first();
    
    if(!channel) return msg.channel.send("Please specify a mention channels!")
    
     client.modlog.set(`ModLog.${msg.guild.id}.channel`, channel.id).then(ModLog => {
        msg.channel.send(`Succesfully Set Modlog To <#${ModLog}>`) 
    })
  }
}