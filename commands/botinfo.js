const Discord = require("discord.js")
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Bot Info`, client.user.avatarURL())
    .setDescription(`<:infected_staff:813009820931588136>** | Prefix:** \`${PREFIX}\`\n<:infected_event:818442553639567395>** | Invite:** [Click Here](${config.inviteLink})\n<a:infected_novost:818437551341305876>** | Support Server:** [Click Here](https://discord.gg/JjESzJPYCk)`)
    .addField('<a:atomicbot_crown:820206900775616532> | Developed by', `> \`Davosᵇˡᵃᶜᵏ ʰᵃᵗ#5555``)
    .addField('<:infected_event:818442553639567395> | Stats', `> \`${client.guilds.cache.size} Guilds\`\n> \`${client.users.cache.size} Users\`\n> \`${client.channels.cache.size} Channels\``)
    .addField('<a:starry:814781273263833119> | Others', `> \`Libary: discord.js\`\n> \`Made at: 8 Feb 2021\``)
    .setThumbnail(client.user.avatarURL())
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)
}
module.exports.help = {
name:"botinfo",
aliases: ['info']
}
