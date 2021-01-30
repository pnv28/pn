const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.mentions.users.size) {
    return message.reply("Who to Rob");
  }
  const taggedUser = message.mentions.users.first();

  const robMessage = [
    `You robed ${taggedUser}, Now he will leave in the street.`,
    `${taggedUser} was Robbed, Who Did it ???`,
    `You have Robbed ${taggedUser}, But You were Found, Have fun in Jail`,
    `You were robbing ${taggedUser}, Cops Found You But Helped You, You split the money with The Cops`,
    `${taggedUser}, Has Been Robbed, The robber is Long Gone`

  ]

  const random = robMessage[Math.floor(Math.random() * robMessage.length)]

  message.channel.send(random);
}

module.exports.help = {
  name: "rob"
}
