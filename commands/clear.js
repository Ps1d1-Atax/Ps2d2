module.exports = {
  run: (client, message, args) => {
    if (!message.member) return

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('você não tem permissão para usar esse comando, necessita da permissão MANAGE_MESSAGES!')

    var limit = 99
    if (args.length === 1) {
      limit = parseInt(args[0])
    } else {
      return message.reply(`\`\`\`determine uma quantidade, essa quantia será eliminada sem deixar rastros em seu servidor: ${module.exports.help.usage}\`\`\``)
    }

    if (!Number.isInteger(limit)) return message.reply(`\`\`\`determine uma quantidade para ser excluida entre 2 a 99! ${module.exports.help.usage}\`\`\``)

    limit = Math.min(limit, 99)

    message.channel.bulkDelete(limit)
      .then(messages => {
        message.channel.send(`${messages.size} mensagens foram deletadas com sucesso!`)
          .then(message => setTimeout(() => message.delete(), 2000))
      })
  },

  conf: {
    onlyguilds: true
  },

  get help () {
    return {
      name: 'clear',
      category: 'Moderação',
      description: 'Apaga mensagens de um canal.',
      usage: '2 - 99',
      admin: true
    }
  }
}