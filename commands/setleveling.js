const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {

  const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

  if(args[0] === 'off') {

    db.delete(`leveling_${message.guild.id}`)
    const success = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
    .setDescription(`<:atomic_yes:814804674041479198>| You succesfully deleted leveling channel!`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(success)


  } else {

  if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {

    const idonthaveperms = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
    .setDescription('<:atomic_njet:814803975798521866> Please give me `MANAGE_MESSAGES` permission.')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(idonthaveperms)
  }

  if (!message.member.hasPermission('MANAGE_MESSAGES')) {

    const perms = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
    .setDescription('<:atomic_njet:814803975798521866> You need `MANAGE_MESSAGES` permission.')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(perms)
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
    .setDescription(`<:atomic_njet:814803975798521866> | You already setup an leveling channel.\n<:supporter:814438096987881472> | You can turn it off \`${PREFIX}setleveling off\`.`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    if(db.get(`leveling_${message.guild.id}`)) return message.channel.send(embed)

    const channel = message.mentions.channels.first();

    if(!channel) {

      const wrongusage = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username} - Wrong Usage`, client.user.avatarURL())
      .setDescription(`<:atomic_njet:814803975798521866>> | Please mention a channel for leveling.\n<a:atomic_novost:818437551341305876> | Example: \`${PREFIX}setleveling [ #channel ]\`.`)
      .setColor(message.guild.me.displayHexColor)
      .setTimestamp()
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
      return message.channel.send(wrongusage);

    }

    if(!db.get(`leveling_${message.guild.id}`)) {

        db.set(`leveling_${message.guild.id}`, channel.id)

        const success = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
        .setDescription(`<:atomic_yes:814804674041479198> | You succesfully set ${channel} to leveling channel!`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(success)

    }

  }

}
module.exports.help = {
    name:"setleveling",
    aliases: ["setlevels"]
  }