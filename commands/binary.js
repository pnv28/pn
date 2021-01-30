const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send('Please Use the Parameters `encode` / `decode`');

    let choice = ['encode', 'decode'];
    if(!choice.includes(args[0].toLowerCase())) return message.channel.send('Please Use the Parameters `encode` / `decode`');

    let text = args.slice(1).join(" ");

    if(!text) return message.channel.send("Please Specify the Text \n`w!binary <encode/decode> <Text>`");

    if(text.lenght > 1024) return message.channel.send('Please Provide the text Which is Less then 1024 Character');

    function encode(char){
        return char.split("").map(str => {
            const converted = str.charCodeAt(0).toString(2);
            return converted.padStart(8, "0");
        }).join(" ")
    };

    function decode(char){
        return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");

    };

    if(args[0].toLowerCase() === 'encode'){
        return message.channel.send(encode(text));
    } else if(args[0].toLowerCase() === 'decode'){
        return message.channel.send(decode(text))
    }
}
module.exports.help = {
  name: "binary"
}