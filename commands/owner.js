const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  if(msg.author.id != '398845938816516096') return msg.channel.sendMessage("<:WrongMark:524375774741135362> This command only for bot creator!");
  
  let code = args.join(' ');
  if (!code) return msg.channel.send("What is the code, my majesty?");
  
  if(code == '4'){
  msg.channel.sendMessage("<:scaryrabbit:467816313205686292> Alright, you made the bot owner or <@398845938816516096> sad or depressed! \n:warning: **You have been warned in our database!** Apologize him may works...");
  }
  
  else if(code == '1')
          {
          msg.channel.sendMessage(":grin: Good good, you made the bot owner or <@398845938816516096> calmed down!");
          }
  
  else if(code == '5')
          {
          msg.channel.sendMessage("<:scaryrabbit:467816313205686292> Alright, you made the bot owner or <@398845938816516096> very depressed than before! \n:warning: **You are useless right now** What have you done? You will in blacklist soon!");
          }
  else
  {
    msg.channel.sendMessage("<:WrongMark:524375774741135362> The code not found, my majesty!");
  }
  
}

//this is owner expression in their servers in real time.