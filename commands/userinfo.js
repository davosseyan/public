const { MessageEmbed } = require('discord.js')

const moment = require('moment');

exports.run = async (client, message, args) => {
  
  const { guild, channel } = message
  
  const user = message.mentions.users.first() || message.member.user
  const member = guild.members.cache.get(user.id)

  const status = {
    dnd: "Do Not Disturb",
    idle: "Idle",
    online: "Online",
    offline: "Offline"
  }
  
  const embed = new MessageEmbed()
  .setAuthor(`${client.user.username} - User Info`, client.user.avatarURL())
  .addField(`> <a:atomic_novost:818437551341305876> | **${user.tag}**`, `\u200B\n<a:atomic_ann:814395137945239552> | Made at: **${moment(user.createdTimestamp).format('LT')} ${moment(user.createdTimestamp).format('LL')} ${moment(user.createdTimestamp).fromNow()}**\n<:atomic_yes:814804674041479198> | Joined Server: **${moment(member.joinedTimestamp).format('LT')} ${moment(member.joinedTimestamp).format('LL')} ${moment(member.joinedTimestamp).fromNow()}**\n<:atomic_staff:813009820931588136> | Nickname: **${member.nickname || "None"}**\n<a:atomic_loading:814807500540346459> | Status: **${status[user.presence.status]}**\n<a:pikachucool:814953537569947699> | Role Count: **${member.roles.cache.size - 1}**`)
  .setThumbnail(user.displayAvatarURL({ dynamic: true }))
  .setColor(message.guild.me.displayHexColor)
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  message.channel.send(embed)

}
module.exports.help = {
    name:"userinfo",
    aliases: ["ui", "user"]
  }