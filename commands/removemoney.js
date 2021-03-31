const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

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
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt mention anyone.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if(!amout) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify valid amout of money you want to remove from user.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if (isNaN(amout)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Amout`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify valid amout of money you want to remove from user.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    let money = db.fetch(`bankcash_${message.guild.id}_${user.id}`)

    if(money < amout) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Oopsie`, client.user.avatarURL())
        .setDescription(`<:infected_njet:814803975798521866> | **That user** doenst have that **much money** in his **bank**.\n<a:lightning_desna_strelica:814927243432296468> | **He currently** has \`${money}$\`.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    db.subtract(`bankcash_${message.guild.id}_${user.id}`, amout)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<:lightning_yes:814804674041479198> | Succefully removed **${amout}$** from user **${user.tag}**.`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(embed)
    

}

module.exports.help = {
  name:"removemoney",
  aliases: ["removecash", "cashremove", "remove-money", "remmoney"]
}