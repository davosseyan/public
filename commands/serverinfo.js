const { MessageEmbed } = require('discord.js')

const moment = require('moment');

exports.run = async (client, message, args) => {

  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

  const offline = members.filter(member => member.presence.status === 'offline').size

  const online = members.filter(member => member.presence.status === 'online').size + members.filter(member => member.presence.status === 'idle').size + members.filter(member => member.presence.status === 'dnd').size
  
  const embed = new MessageEmbed()
  .setAuthor(`${client.user.username} - Server Info`, client.user.avatarURL())

  .addField('📛 | Server Name', `${message.guild.name}`)
  .addField('🆔 | Server ID', `${message.guild.id}`)
  .addField('<a:atomicbot_crown:820206900775616532> | Server Owner', `${message.guild.owner.user}`)
  .addField('📅 | Server Created', `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`)
  .addField(`<:members:796436062179688498> | Members (${message.guild.memberCount})`, `**${online}** Online\n**${offline}** Offline\n**${message.guild.premiumSubscriptionCount || '0'}** Boost/s`) 
  .addField(`<:atomicbot_channel:820210225021714432> | Channels (${message.guild.channels.cache.size}) `, `**${channels.filter(channel => channel.type === 'text').size}** Text | **${channels.filter(channel => channel.type === 'voice').size}** Voice`)
  .addField(`<a:starry:814781273263833119> | Others`, `**Roles:** ${roles.length}\n**Region:** ${message.guild.region}`) 

  .setThumbnail(message.guild.iconURL({ dynamic:true }))
  .setColor(message.guild.me.displayHexColor)
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  message.channel.send(embed)

}
module.exports.help = {
    name:"serverinfo",
    aliases: ["si", "server"]
  }