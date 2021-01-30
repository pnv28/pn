const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.mentions.users.size) {
    return message.reply("Who to Kill");
  }
  const taggedUser = message.mentions.users.first();

  const dieMessage = [
    `You Killed ${taggedUser}, His Finnal Words are Why ${message.author} Why`,
    `You stabbed ${taggedUser} in the Back `,
    `You Tried to Kill ${taggedUser}, But Unfortunatly the Cops Aressted You`,
    `${taggedUser} Sucided out of Shame`,
    `${taggedUser}, Wished to Be Immortal But His Wish Reversed and He Died by Magic`,
    `Wow, ${taggedUser} Died in His Dream, But Did He Die in Real Life Also`,
    `${taggedUser} Slipped on Stairs which Broke His Skull`,
    `You did'nt have to kill ${taggedUser}, He is Already Dead`
  ]
  const randomMessage = dieMessage[Math.floor(Math.random() * dieMessage.length)];

  

  message.channel.send(randomMessage);
}

module.exports.help = {
  name: "kill"
}
