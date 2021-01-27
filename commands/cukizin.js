const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
    'http://i.imgur.com/SLwEY66.gif', 
    'http://i.imgur.com/K6VoNp3.gif', 
    'http://i.imgur.com/knVM6Lb.gif',
    'http://i.imgur.com/P1BMly5.gif', 
    'http://i.imgur.com/I8CrTUT.gif', 
    'https://i.imgur.com/0XTueQR.png',
    'https://i.imgur.com/u9k8x4J.png', 
    'https://i.imgur.com/AUtfHnK.png', 
    'https://i.imgur.com/XjTbrKc.png',
    'https://i.imgur.com/A3mgqEh.png', 
    'https://i.imgur.com/YnkdGZd.png', 
    'https://i.imgur.com/FJsOnOE.png',
    'https://i.imgur.com/RQFPwDg.png', 
    'https://i.imgur.com/vyCTGr0.png', 
    'https://i.imgur.com/kkXToc8.png',
    'https://i.imgur.com/ctHwqVL.png', 
    'https://i.imgur.com/yUaCPvC.png', 
    'https://i.imgur.com/IUM6Z8F.png'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.send('**<:784396358496682004:801089976921882665> | Mencione um usuario que seja valido!**');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('🍪 | Eu não dividiria rs', true)
        .setColor("BLACK")
        .setDescription(`${message.author} deu para ${user} um cookie 🍪 `,true)
        .setImage(rand)
  await message.channel.send(embed);
}