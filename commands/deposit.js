const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let cash = await db.fetch(`invcash_${message.guild.id}_${message.author.id}`)

    if(args[0] === 'all') {

        if(cash === null) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You dont have that much money in your pocket.`, message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        db.subtract(`invcash_${message.guild.id}_${message.author.id}`, cash)
        db.add(`bankcash_${message.guild.id}_${message.author.id}`, cash)
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<:atomic_yes:814804674041479198> | ${await client.translate(`Succesfully deposited \`${cash}\` cash to your bank.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    if (!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`Please specify valid amout of money you want to deposit.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }

    if (isNaN(args[0])) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`Please specify valid amout of money you want to deposit.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    if(cash < args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You dont have that much money in your pocket.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }

    db.subtract(`invcash_${message.guild.id}_${message.author.id}`, args[0])
    db.add(`bankcash_${message.guild.id}_${message.author.id}`, args[0])

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<:atomic_yes:814804674041479198> | ${await client.translate(`Succesfully deposited \`${args[0]}\` cash to your bank.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    return message.channel.send(embed)
    
}
module.exports.help = {
    name:"deposit",
    aliases: ["dep"]
}