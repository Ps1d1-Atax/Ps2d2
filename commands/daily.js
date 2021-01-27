const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
    
    let user = message.author;

    let timeout = 86400000;

    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
    
    let amount = Math.floor(Math.random() * 10000) + 1000;
    
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`🍪 | Você já recebeu sua recompensa diária de cookies!\n\nColete novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
            
        message.channel.send(``, timeEmbed);

    } else {
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle("🍪 | Recompensa Diária de cookies!")
        .setColor("BLACK")
        .setDescription(`Você coletou sua recompensa diária de cookies!\n\nCookies Coletado: \`${amount}\``);
        
        message.channel.send(``, moneyEmbed);
        db.add(`money_${message.guild.id}_${user.id}`, amount);
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
    }
}