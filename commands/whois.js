const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
  let userArray = message.content.split(" ");
  let userArgs = userArray.slice(1);
  let user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
  
  
  
  function game() {
    let game;
    if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
    else if (user.presence.activities.length < 1) game = "None";
    return game; 
  }
  
  let x = Date.now() - user.createdAt; 
  let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; 
  let created = Math.floor(x / 86400000); 
  let joined = Math.floor(y / 86400000);
  
  const member = message.guild.member(user);
  let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
  let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
  let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
  
  const embed = new Discord.MessageEmbed()
  .setAuthor( 'User Info', member.user.displayAvatarURL())
  .setThumbnail(member.user.displayAvatarURL())
  .setTimestamp()
  .setColor("RANDOM")
  .addField("ID", user.id, true)
  .addField("Nickname", nickname, true)
  .addField("Created Account Date", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true) 
  .addField("Joined Guild Date", `${joindate} \nsince ${joined} day(s) ago`, true)
  .addField("Game", game(), true)
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "whois"
}