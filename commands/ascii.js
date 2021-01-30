const figlet = require("figlet");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!args[0])
      return message.channel.send("```..ascii [Text]\n Text is Missing```");

    msg = args.join(" ");

    figlet.text(msg, function (err, data) {
      if (err) {
        console.log("Some thing Went Wrong in Command Asci");
        console.dir(err);
      }
      if (data.length > 2000)
        return message.channel.send(
          "While Converting This Text, I Hit the Discord Character Limit of 2000 Characters. Please Provide Something Smaller"
        );

      message.channel.send("```" + data + "```");
    });
}

module.exports.help = {
  name: "ascii"
}