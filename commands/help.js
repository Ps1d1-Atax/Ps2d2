//Comando de help com reações
//Creditos a: Guilhermy gostosão
const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("Lista de comandos!")
    .setDescription(`**Opa, quer ajuda?**
        
       **[**Meu Prefixo é p.**]**
       **[**Reaja com esses emojis para ver meus comandos!...**]**

       💎 | reaja para ver comandos de Diversão/Utilitarios

       🎫 | reaja para ver comandos de Moderação
       
       💵 | reaja para ver comandos de Economia
       
       🔮 | reaja para voltar aqui
       `)
 
    

    
  message.channel.send(ajuda).then(msg => {
    msg.react('🔮').then(r => {
      msg.react('🎫').then(r => {
    msg.react('💎').then(r => {
      msg.react('💵').then(r => {
        
        
      })
      })
    })
  })
    
    const economyFilter = (reaction, user) => reaction.emoji.name === '💵' && user.id === message.author.id;
    const infosFilter = (reaction, user) => reaction.emoji.name === '🔮' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🎫' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '💎' && user.id === message.author.id;
    
    const economy = msg.createReactionCollector(economyFilter)
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);
    
    economy.on('collect', r2 => {
      
      ajuda.setTitle("Lista de comandos de economia!")
    ajuda.setDescription(`**Opa, quer ajuda?**
      
      **[**Meu Prefixo é p.**]**
    
      💴 | Comando de daily...**p.daily**

      💸 | Comando de roubar...**p.roubar @user**

      🎟 | Comando de pagar...**p.pay @user <quantia>**

      📀 | Comando de saldo...**p.cookies @user (opicional)**

      🎁 | Comando de addmoney...**p.addcookies @user <quantia>**
      
      🥇 | Comando de rank...**p.rank**

    `)
      msg.edit(ajuda)
    })
    
    infos.on('collect', r2 => {
      
      ajuda.setDescription(`**Opa, quer ajuda?**
        
       **[**Meu Prefixo é p.**]**
       **[**Reaja com esses emojis para ver meus comandos!...**]**

       💎 | reaja para ver comandos de Diversão

       🎫 | reaja para ver comandos de Moderação
       
       💵 | reaja para ver comandos de Economia
       
       🔮 | reaja para voltar aqui
      
      `)
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {

      ajuda.setDescription(`**Opa, quer ajuda?**
      
      **[**Meu Prefixo é p.**]**
      
      <:801089976573493279:801560951400824872> | Comando de Clear...**p.clear <quantia 2-99>**
      
      <:801089976922013727:801560951580262400> | Comando de Lock...**p.lock #canal (opcional)**

      <:801089976732483585:801560951148773376> | Comando de unlock...**p.unlock #canal (opcional)**`)
      msg.edit(ajuda)
      
    })
    
    fun.on('collect', r2 => {
 
      ajuda.setDescription(`**Opa, quer ajuda?**
        
       **[**Meu Prefixo é p.**]**
      
      <:emoji_23:796974950816808960> | Comando de Kiss...**p.kiss @user**

      <:emoji_19:796974875297841163> | Comando de Avatar...**p.avatar @user (opicional)**

      <:emoji_15:796974787058466828> | Comando de Say...**p.say**


      <:emoji_18:796974857409658891> | Comando de dar cookies...**p.cukizin @user**
      
      <:Uau:796166630677544980> | Comando de corrida entre usuários...**p.race @user**
      
      <:emoji_14:796974768310059009> | Comando de calculadora...**p.calculadora (calculo) (/ = divisão)(* = multiplicação)(+ = adição)(- = subtração)(^ = elevção de numero ex; 2^ 2**) `)
      msg.edit(ajuda)

    })
  })  
  
} 
