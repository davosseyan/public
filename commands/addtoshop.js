const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const cash = args[1]
    const role = message.mentions.roles.first()

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {

        const perms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Permissions`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You need \`MANAGE_MESSAGES\` permission.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(perms)
    }

    if(!role) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please mention role you want to sell.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }

    if(!cash) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please put a valid amout of money for role.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    
    if (isNaN(cash)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please put a valid amout of money for role.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    const roleid = message.mentions.roles.first().id
    
    if(!db.get(`role1_${message.guild.id}`) && !db.get(`role2_${message.guild.id}`) && !db.get(`role3_${message.guild.id}`) && !db.get(`role4_${message.guild.id}`) && !db.get(`role5_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`Succesfully added role ${role} to shop, and price is **${cash}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed).then((msg) => {
            setTimeout(function () {

                db.set(`role1_${message.guild.id}`, roleid)
                db.set(`roleprice1_${msg.guild.id}`, cash)

            }, 2000)
        }) 
    }

    if(db.get(`role5_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`You cant add more than **5** roles in the shop.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(db.get(`role4_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`Succesfully added role ${role} to shop, and price is **${cash}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed).then((msg) => {
            setTimeout(function () {

                db.set(`role5_${msg.guild.id}`, roleid)
                db.set(`roleprice5_${msg.guild.id}`, cash)

            }, 2000)
        }) 
    }

    if(db.get(`role3_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`Succesfully added role ${role} to shop, and price is **${cash}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed).then((msg) => {
            setTimeout(function () {

                db.set(`role4_${msg.guild.id}`, roleid)
                db.set(`roleprice4_${msg.guild.id}`, cash)

            }, 2000)
        }) 
    }

    if(db.get(`role2_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`Succesfully added role ${role} to shop, and price is **${cash}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed).then((msg) => {
            setTimeout(function () {

                db.set(`role3_${msg.guild.id}`, roleid)
                db.set(`roleprice3_${msg.guild.id}`, cash)

            }, 2000)
        }) 
    }

    if(db.get(`role1_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Shop`, client.user.avatarURL())
        .setDescription(`<:infected_yes:814804674041479198> | ${await client.translate(`Succesfully added role ${role} to shop, and price is **${cash}**.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed).then((msg) => {
            setTimeout(function () {

                db.set(`role2_${msg.guild.id}`, roleid)
                db.set(`roleprice2_${msg.guild.id}`, cash)

            }, 2000)
        }) 
    }
    
}
module.exports.help = {
    name:"addtoshop",
    aliases: ["addshop", "shopadd", "ats"]
  }