const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: true,
  testOnly: false,
  description: 'Info about slash commands.',
  callback: ({ client, message, args }) => {

    const embed = new MessageEmbed()
    .setAuthor(`${client.user.username} - Info`, client.user.avatarURL())
    .setDescription('Hey, you made it in **__slash commands__**, this was testing attempt and it works. Maybe in feature i will make more of these slash commands, its really not hard but theres some issues with them. If you want fell free to join our support server, i also made command for that.')
    .setColor('GREEN')
    .setFooter('mqrkelich.com', client.user.avatarURL())

    if (message) {
      message.reply('', { embed })
    }

    return embed
  },
}