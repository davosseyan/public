const db = require('quick.db');
const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async (client, message, args) => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    const embed = new Discord.MessageEmbed()

    if(!db.get(`role1_${message.guild.id}`) && !db.get(`role2_${message.guild.id}`) && !db.get(`role3_${message.guild.id}`) && !db.get(`role4_${message.guild.id}`) && !db.get(`role5_${message.guild.id}`) ) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription('<:infected_njet:814803975798521866> | Theres **nothing** in **shop** now...')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if(db.get(`role5_${message.guild.id}`)) {

        embed
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`> 🛍️ | **${message.guild.name}** - Shop`)
        .addField(`\u200b`, 
        `> <a:fc_bluearrow:814191617383596073> | **(1)** <@&${db.fetch(`role1_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice1_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(2)** <@&${db.fetch(`role2_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice2_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(3)** <@&${db.fetch(`role3_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice3_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(4)** <@&${db.fetch(`role4_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice4_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(5)** <@&${db.fetch(`role5_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice5_${message.guild.id}`)}$**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)


    }

    if(db.get(`role4_${message.guild.id}`)) {

        embed
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`> 🛍️ | **${message.guild.name}** - Shop`)
        .addField(`\u200b`, 
        `> <a:fc_bluearrow:814191617383596073> | **(1)** <@&${db.fetch(`role1_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice1_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(2)** <@&${db.fetch(`role2_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice2_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(3)** <@&${db.fetch(`role3_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice3_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(4)** <@&${db.fetch(`role4_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice4_${message.guild.id}`)}$**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)


    }

    if(db.get(`role3_${message.guild.id}`)) {

        embed
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`> 🛍️ | **${message.guild.name}** - Shop`)
        .addField(`\u200b`, 
        `> <a:fc_bluearrow:814191617383596073> | **(1)** <@&${db.fetch(`role1_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice1_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(2)** <@&${db.fetch(`role2_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice2_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(3)** <@&${db.fetch(`role3_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice3_${message.guild.id}`)}$**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)


    }

    if(db.get(`role2_${message.guild.id}`)) {

        embed
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`> 🛍️ | **${message.guild.name}** - Shop`)
        .addField(`\u200b`, 
        `> <a:fc_bluearrow:814191617383596073> | **(1)** <@&${db.fetch(`role1_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice1_${message.guild.id}`)}$**\n
        > <a:fc_bluearrow:814191617383596073> | **(2)** <@&${db.fetch(`role2_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice2_${message.guild.id}`)}$**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    if(db.get(`role1_${message.guild.id}`)) {

        embed
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`> 🛍️ | **${message.guild.name}** - Shop`)
        .addField(`\u200b`, 
        `> <a:fc_bluearrow:814191617383596073> | **(1)** <@&${db.fetch(`role1_${message.guild.id}`)}> <a:arrow:820999461445959751> **${db.fetch(`roleprice1_${message.guild.id}`)}$**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

}
module.exports.help = {
    name:"shop",
    aliases: ["shop"]
  }