const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: true,
  testOnly: false,
  description: 'Check out the ping of the bot.',
  callback: ({ client, message, args }) => {

    if (message) {
      message.reply(`**${client.ws.ping}** Pong 🏓`)
    }

    return `**${client.ws.ping}ms** Pong 🏓`
  },
}