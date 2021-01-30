const Discord = require("discord.js");
const moment = require('moment')
const dateformat = require('dateformat')
const client = new Discord.Client()

module.exports.run = async (bot, message, args) => {
  let icon = message.guild.iconURL({size: 2048}); 
            
  let channels = message.guild.channels;
  let totalchan = channels.cache.size - 2;
      
  let x = Date.now() - message.guild.createdAt;
  let h = Math.floor(x / 86400000) 
  let created = dateformat(message.guild.createdAt); 
    
  const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Date Created", `${created} \nsince **${h}** day(s)`)
    .addField(`Members`, `${message.guild.memberCount - 1}`)
    .addField(`Channels`, `${totalchan}`)
    .addField("Emoji Count", `${message.guild.emojis.cache.size}`)
    .addField("Roles Count", `${message.guild.roles.cache.size}`)
  
    message.channel.send(embed); 
}

module.exports.help = {
  name: "server"
}