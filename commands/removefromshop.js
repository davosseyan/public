const db = require('quick.db');
const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {

        const perms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> You need `MANAGE_MESSAGES` permission.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(perms)
    }

    if(!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_njet:814803975798521866> | Please **provide** valid item to **remove** from shop.\n<:infected_money:820571473621286942> | You can **find** all shop **items** by typing \`${PREFIX}shop\`.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    const slot1 = db.get(`role1_${message.guild.id}`)
    const slot2 = db.get(`role2_${message.guild.id}`)
    const slot3 = db.get(`role3_${message.guild.id}`)
    const slot4 = db.get(`role4_${message.guild.id}`)
    const slot5 = db.get(`role5_${message.guild.id}`)


    let slot = args.join(" ");

    if(slot === '1') {

        if(!slot1) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **cant** remove that item **from** shop, its not on **shop**..`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        db.delete(`role1_${message.guild.id}`)
        db.delete(`roleprice2_${message.guild.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | **Succesfully removed** item from slot **1**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    if(slot === '2') {
        
        if(!slot2) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **cant** remove that item **from** shop, its not on **shop**..`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        db.delete(`role2_${message.guild.id}`)
        db.delete(`roleprice2_${message.guild.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> |**Succesfully removed** item from slot **2**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)


    }

    if(slot === '3') {

        if(!slot3) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **cant** remove that item **from** shop, its not on **shop**..`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        db.delete(`role3_${message.guild.id}`)
        db.delete(`roleprice3_${message.guild.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | **Succesfully removed** item from slot **3**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    if(slot === '4') {

        if(!slot4) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **cant** remove that item **from** shop, its not on **shop**..`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        db.delete(`role4_${message.guild.id}`)
        db.delete(`roleprice4_${message.guild.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | **Succesfully removed** item from slot **4**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    if(slot === '5') {

        if(!slot5) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **cant** remove that item **from** shop, its not on **shop**..`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        db.delete(`role5_${message.guild.id}`)
        db.delete(`roleprice5_${message.guild.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | **Succesfully removed** item from slot **5**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }
}
module.exports.help = {
    name:"removefromshop",
    aliases: ["rfs", "removeshop", "shopremove"]
  }