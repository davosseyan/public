const Discord = require('discord.js');
const config = require('../config.json')
const db = require('quick.db')


exports.run = async (client, message, args) => {
         
        if(!message.member.hasPermission('MANAGE_GUILD')) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Prefix`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_GUILD`')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        if(!args[0]) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Prefix`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | Please specify a new prefix to bot.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        if(args[0].length > 3) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Prefix`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | Prefix can not be longer than 3 characters.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        if(args[0] === db.get(`guild_${message.guild.id}_prefix`)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Prefix`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You already use that prefix in this guild.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        if(args[0] === config.prefixNormalni) db.delete(`guild_${message.guild.id}_prefix`)

        db.set(`guild_${message.guild.id}_prefix`, args[0])

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Prefix`, client.user.avatarURL())
        .setDescription(`<:atomic_yes:814804674041479198> | Succefully set new prefix to **${args[0]}**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)


}
module.exports.help = {
    name:"setprefix",
    aliases: ["setprefix"]
  }