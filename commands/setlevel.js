const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if(!db.get(`leveling_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
        .setDescription('<:infected_njet:814803975798521866> | **Leveling** system is turned **off** in this **server**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    } else {

    const user = message.mentions.users.first()
    const amout = args[1];

    if (!message.member.hasPermission('ADMINISTRATOR')) {

        const perms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You need `ADMINISTRATOR` permission.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(perms)
    }

    if(!user) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Mention`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | **You didn't** mention **anyone**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if(!amout) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | Please **specify** valid amout of **level** you want to **set to user**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if (isNaN(amout)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | Please **specify** valid amout of **level** you want to **set to user**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    db.set(`level_${message.guild.id}_${user.id}`, amout)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Levels`, client.user.avatarURL())
    .setDescription(`<:lightning_yes:814804674041479198> | Succefully set level **${amout}** to user **${user.tag}**.`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(embed)

    }
    

}

module.exports.help = {
  name:"setlevel",
  aliases: ["setlevel"]
}