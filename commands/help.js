const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  const newCommand = new Discord.MessageEmbed()
  .setColor("02fbcf")
  .setTitle("Recently Added Commands")
  .setDescription("Error May Occur With wrong Permissions, Please ReInvite the Bot If You Have Denied a Permission")
  .setURL("https://discord.gg/Bc86sd9rMn")
  .addField(`\`${prefix}8ball\``, "Answers To Your Question")
  .addField(`\`${prefix}coinflip\``, "Test Your Luck See if Heads or Tails Comes")
  .setTimestamp();

  const fun = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Fun")
  .setURL("https://discord.gg/Bc86sd9rMn")
  .addField(`\`${prefix}meme\``, "Perfect Command for Random Meme")
  .addField(`\`${prefix}kill\``, "Have Fun By Killing a Person Virtually via Mention")
  .addField(`\`${prefix}gg\``, "Says Good Game to the Person via Mention")
  .addField(`\`${prefix}8ball\``, "Answers To Your Question")
  .addField(`\`${prefix}avatar\``, "Shows a Persons Profile Picture via Mention")
  .addField(`\`${prefix}coinflip\``, "Test Your Luck See if Heads for Tails Comes")
  .addField(`\`${prefix}ascii\``, "Converts Text to Ascii")
  .addField(`\`${prefix}rob\``, "Have Fun By Virtually Robbing Someone via Mention")
  .addField(`\`${prefix}binary\``, 'Turn Text to Binary')
  .addField(`\`${prefix}say\``, "Repeats What You Said")
  .setTimestamp();

  const utilities = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Utilities")
  .setURL("https://discord.gg/Bc86sd9rMn")
  .addField(`\`${prefix}whois\``, "Shows Userinfo via Mention")
  .addField(`\`${prefix}server\``, "Shows Basic Info About the Server")
  .setTimestamp()

  const moderation = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Moderation")
  .setURL("https://discord.gg/Bc86sd9rMn")
  .addField(`\`${prefix}kick\``, "Kicks the Player Via Mention. Reason can Be Provided")
  .addField(`\`${prefix}ban\``,"Bans the Player Via Mention. Reason can Be Provided")
  .addField(`\`${prefix}clear\``, "Deletes selected messages from the range 1 - 99")
  .addField(`\`${prefix}lock\``, "Locks Channel from the role everyone")
  .addField(`\`${prefix}unlock\``, "Unlocks Channel from the role everyone")
  .addField(`\`${prefix}sync\``, "Syncs Permission of the Channel and Parent Category" )
  .addField(`\`${prefix}mute\``, "Mutes a Person via Mention")
  .addField(`\`${prefix}unmute\``, "Unmutes a Person Via Metion")
  .setTimestamp();

  const aboutBot = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("About Bot")
  .setURL("https://discord.gg/Bc86sd9rMn")
  .addField(`\`${prefix}ping\``, "Shows the Bot Ping")
  .addField(`\`${prefix}support\``, "Sends Bot Support Server")
  .addField(`\`${prefix}help\``, "Shows This Message")
  .addField(`\`${prefix}vote\``, "Vote Our Bot For Support")
  .addField(`\`${prefix}invite\``, "Want our Bot Somewhere, Invite it")
  .addField(`\`${prefix}author\``, "Bot Made By <@389306174119608321>")
  .setTimestamp();

  const pages = [newCommand, fun, utilities, moderation, aboutBot];

  const emojiList = ["⏪", "⏩"];

  const timeout = "120000";

  pagination(message, pages, emojiList, timeout);

  if(error){
    message.channel.send('Do I Have Permissions to Send Embed')
  }
}

module.exports.help = {
  name: "help"
}