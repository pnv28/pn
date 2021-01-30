const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_CHANNELS")) {
    message.react("👍").then(() => message.react("👎"));

    const filter = (reaction, user) => {
      return (
        ["👍", "👎"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      );
    };

    message.channel.send(
      "React with 👍 to continue, React with 👎 to cancel"
    );

    message
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
      .then((collected) => {
        const reaction = collected.first();

        if (reaction.emoji.name === "👍") {
          if (!message.channel.parent) {
            message.channel.bulkDelete(1);
            message.channel.send(
              `The channel ${message.channel} is under no category`
            );
            return console.log(
              `The channel ${message.channel} is not listed under a category`
            );
          }
          message.channel.bulkDelete(1);
          message.channel
            .lockPermissions()
            .then(() =>
              console.log(
                "Successfully synchronized permissions with parent Category"
              )
            )
            .then(() =>
              message.channel.send(
                `The Channel ${message.channel}'s permissions are synced with the parent Category`
              )
            )
            .catch(console.error);
        } else {
          message.channel.bulkDelete(1);
          message.reply("You have canceled the synchronization process");
        }
      })
      .catch((collected) => {
        message.channel.bulkDelete(1);
        message.reply("You didn't answered so the process was canceled");
      });
  } else {
    message.channel.send("Insufficent Permissions");
  }
}

module.exports.help = {
  name: "sync"
}