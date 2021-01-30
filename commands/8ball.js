const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const answers = [
        'Sure',
        'Obiously',
        '💯 %',
        'No',
        'Maybe',
        'You Can Try',
        'You Should',
        'Probably',
        'Probably Not',
        'Ofcourse',
        'If You Try',
        'As I see it, yes',
        'Cannot predict now',
        'Concentrate and ask again',
        'It is certain'
    ]
    if(!args[0]) return message.channel.send('What is your Question')
    const send = answers[Math.floor(Math.random() * answers.length)]

    const ballEmbed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle('🎱 Magic 8Ball Says 🎱')
    .setDescription('**' + send + '**')
    .setTimestamp()

    message.channel.send(ballEmbed)
}

module.exports.help = {
  name: "8ball"
}
  