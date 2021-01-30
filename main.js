const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const DBL = require('dblapi.js');
const db = require('quick.db')
bot.commands = new Discord.Collection();
const dbl = new DBL( config.topapi, bot)

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

})

dbl.on('posted', () => {
  console.log('Server count posted!');
  bot.user
    .setActivity(`${bot.guilds.cache.size} Servers | !help`, { type: "WATCHING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
})
dbl.on('error', e => {
  console.log(`Oops! ${e}`);
})




bot.on("ready", () => {
  console.log(bot.user.username + " is online.")
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix;
  let prefixes = await db.fetch(`prefix_${message.guild.id}`)

  if(prefixes === null){
    prefix = "!"
  } else{
    prefix = prefixes
  }


  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

})


bot.login(process.env.token)