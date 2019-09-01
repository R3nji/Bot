const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
    client.user.setGame("En développement");
})

bot.login(process.env.TOKEN);
