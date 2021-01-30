const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const FlipOCoin = [
        '<:discordcoin:797690743510663178> You Got Heads <:discordcoin:797690743510663178>',
        '<:discordcoin:797690743510663178> You Got Tails <:discordcoin:797690743510663178>'
    ]
    const random = FlipOCoin[Math.floor(Math.random() * FlipOCoin.length)]
    message.channel.send(random)
}

module.exports.help = {
  name: "coinflip"
}
  