const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    let user = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;

    let money = db.fetch(`money_${message.guild.id}_${user.id}`)
    if(money === null) money = 0;
  
    let bank = db.fetch(`bank_${message.guild.id}_${user.id}`)
    if(bank === null) bank = 0;

    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("🍪 | Balanço cooktário")
    .setDescription(`Veja as informações da sua carteira de cookies:` +
    `\n\nCookies: ${money}`)
    
    message.channel.send(embed);
}