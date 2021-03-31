const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: true,
  testOnly: false,
  description: 'Check out support & main server of our bot.',
  callback: ({ client, message, args }) => {

    const embed = new MessageEmbed()
    .setAuthor(`${client.user.username} - Support`, client.user.avatarURL())
    .setDescription('You can join our support and main server down there.')
    .addField('<:waiting:825669839967879198> | Support', '[Click Here](https://discord.gg/UfwMkeAMzr)')
    .addField('<:supporter:814438096987881472> | Main', '[Click Here](https://discord.gg/7yzuvxtbzk)')
    .setColor('GREEN')
    .setFooter('mqrkelich.com', client.user.avatarURL())

    if (message) {
      message.reply('', { embed })
    }

    return embed
  },
}