const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`🍪 | Você tem que ter perm "ADMINISTRATOR" para usar esse comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(`🍪 | Você precisa mencionar um usuário para adicionar os cookies!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(`🍪 | Você precisa colocar um numero valido!`);
    };

    db.add(`money_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("🍪 | Alteração cooktária")
    .setColor("BLACK")
    .setDescription(`Foi adicionado ${args[1]} cookies para ${user}!\n\n cookies Atual: ${bal}`)
    message.channel.send(moneyEmbed);
}