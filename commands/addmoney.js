const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const user = message.mentions.users.first()
    const amout = args[1];

    if (!message.member.hasPermission('ADMINISTRATOR')) {

        const perms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You need \`ADMINISTRATOR\` permission.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(perms)
    }

    if(!user) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Mention`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt mention anyone.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if(!amout) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify valid amout of money you want to add to user.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if (isNaN(amout)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify valid amout of money you want to add to user.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    db.add(`bankcash_${message.guild.id}_${user.id}`, amout)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<:lightning_yes:814804674041479198> | ${await client.translate(`Succefully added **${amout}$** to user **${user.tag}**.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(embed)
    

}

module.exports.help = {
  name:"addmoney",
  aliases: ["addcash", "cashadd", "add-money"]
}