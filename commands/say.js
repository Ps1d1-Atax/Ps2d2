const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let msg = args.join(" ")
  let embed = new Discord.MessageEmbed()
     .setColor("BLACK")
      .setDescription(msg)
   .setFooter(message.author.tag)
  message.channel.send(embed)
}