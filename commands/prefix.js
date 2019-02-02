const Discord = require("discord.js");
const fs = require("fs");

exports.run = async(client, msg, args) => {
  if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("<:WrongMark:524375774741135362> You don't have permissions to set prefix!");
  if(!args[0]) return msg.channel.send(":warning: Please specify a prefix!");
  
  let rozi = JSON.parse(fs.readFileSync("./rozi.json", "utf8"));
  rozi[msg.guild.id] = {
    prefix: args[0]
  }
  
  fs.writeFile("./rozi.json", JSON.stringify(rozi), (err) => {
     if(err) console.log(err);
  })
  
  msg.channel.send(`:white_check_mark: Prefix has been set to **${args[0]}**`);
}