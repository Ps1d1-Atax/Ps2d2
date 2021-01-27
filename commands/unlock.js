const Discord = require("discord.js");

exports.run = async (bot,message,args) => {
    if (!message.member.roles.cache.has('Misty Staff') && !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Você não tem permissão para executar esse comando!");
    }
    
    const channel  = message.mentions.channels.first() || message.channel;
    const roles    = message.guild.roles.cache;
    const everyone = roles.find(role => role.name === "@everyone");

    await channel.overwritePermissions([
        {
            id: everyone,
            allow: ["SEND_MESSAGES"]
        }
    ]);
//créditos zUnKx
    const msg = new Discord.MessageEmbed()
      .setColor("BLACK")
        .setTitle('\Ativo novamente!')
        .setDescription(`Canal desbloquado sem exitôs, podem voltar a badernar!, **[<#${channel.id}>]**`)


    return message.channel.send(msg);
};


