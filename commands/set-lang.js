const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {

    const mqrkelich = config.mqrkelichID
    const kyfox = config.KyFoxID

    if(message.member.id === mqrkelich || message.member.id === kyfox) {

        const lang = args[0];
        if(!lang) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Language`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt specify language you want to set.', message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true}))
            return message.channel.send(embed)
            
        }
        await db.set(`lang_${message.guild.id}`, lang);
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Language`, client.user.avatarURL())
        .setDescription(`<:lightning_yes:814804674041479198> | ${await client.translate(`Succesfully set language to **${lang}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(`${await client.translate('This is not 100% right translate.', message)}`, message.author.displayAvatarURL({ dynamic:true}))
        return message.channel.send(embed)

    }

    if(!message.member.hasPermission('ADMINISTRATOR')) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You dont have enough permissions to use this command.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true}))
        return message.channel.send(embed)
    }
    const lang = args[0];
    if(!lang) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Language`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt specify language you want to set.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true}))
        return message.channel.send(embed)
        
    }
    await db.set(`lang_${message.guild.id}`, lang);
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Language`, client.user.avatarURL())
    .setDescription(`<:lightning_yes:814804674041479198> | ${await client.translate(`Succesfully set language to **${lang}**.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(`${await client.translate('This is not 100% right translate.', message)}`, message.author.displayAvatarURL({ dynamic:true}))
    return message.channel.send(embed)

}

module.exports.help = {
  name:"set-lang",
  aliases: ["language", "jezik-set", "setlang"]
}