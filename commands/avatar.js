const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author

    let embed = new Discord.MessageEmbed()
        .setDescription(`[Clique aqui para baixar a sua linda imagem :3](${user.displayAvatarURL({ format: 'png' })}).`)
        .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
        .setColor("BLACK")
    message.channel.send(embed)
}