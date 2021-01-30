const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    let pre = args[0]
    
    if(!pre){
        message.channel.send('You Have to provide A new Prefix')
    } 
    else {
        if(message.member.permissions.has("ADMINISTRATOR")){
            db.set(`prefix_${message.guild.id}`, pre)
            message.channel.send(`The Prefix for This server has Been Changed to ${pre}`)
        }
        else{
            message.channel.send('You Need the Permission `Administrtor` to use this Command');
        }
    }
    
}

module.exports.help ={
    name: "prefix"
}