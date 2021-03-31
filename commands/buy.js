const db = require('quick.db');
const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    if(!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
        .setDescription(`<:infected_njet:814803975798521866> | Please **provide** valid item to **buy**.\n<:infected_money:820571473621286942> | You can **find** all shop **items** by typing \`${PREFIX}shop\`.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    let role1 = message.guild.roles.cache.get(`${db.get(`role1_${message.guild.id}`)}`)
    let roleprice1 = db.get(`roleprice1_${message.guild.id}`)

    let role2 = message.guild.roles.cache.get(`${db.get(`role2_${message.guild.id}`)}`)
    let roleprice2 = db.get(`roleprice2_${message.guild.id}`)

    let role3 = message.guild.roles.cache.get(`${db.get(`role3_${message.guild.id}`)}`)
    let roleprice3 = db.get(`roleprice3_${message.guild.id}`)

    let role4 = message.guild.roles.cache.get(`${db.get(`role4_${message.guild.id}`)}`)
    let roleprice4 = db.get(`roleprice4_${message.guild.id}`)

    let role5 = message.guild.roles.cache.get(`${db.get(`role5_${message.guild.id}`)}`)
    let roleprice5 = db.get(`roleprice5_${message.guild.id}`)


    let purchase = args.join(" ");
    let money = db.fetch(`bankcash_${message.guild.id}_${message.author.id}`)

    if(purchase === '1') {

        if(!role1) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | I cant **find** that role on shop list.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(money < roleprice1) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **do not** have **enough** money in your bank for **that** role.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        message.member.roles.add(role1)

        .then(() => {

            db.subtract(`bankcash_${message.guild.id}_${message.author.id}`, roleprice1);

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_yes:814804674041479198> | Succesfully **bought** role ${role1} for ${roleprice1}$.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        })
        
        .catch((error) => {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })

        })

    }

    if(purchase === '2') {

        if(!role2) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | I cant **find** that role on shop list.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(money < roleprice2) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **do not** have **enough** money in your bank for **that** role.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        message.member.roles.add(role2)

        .then(() => {
            
            db.subtract(`bankcash_${message.guild.id}_${message.author.id}`, roleprice2);

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_yes:814804674041479198> | Succesfully **bought** role ${role2} for ${roleprice2}$.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        })
        
        .catch((error) => {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })
        })

    }

    if(purchase === '3') {

        if(!role3) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | I cant **find** that role on shop list.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(money < roleprice3) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **do not** have **enough** money in your bank for **that** role.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        message.member.roles.add(role3)
        .then(() => {

            db.subtract(`bankcash_${message.guild.id}_${message.author.id}`, roleprice3);

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_yes:814804674041479198> | Succesfully **bought** role ${role3} for ${roleprice3}$.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        })

        .catch((error) => {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })
        })

    }

    if(purchase === '4') {

        if(!role4) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | I cant **find** that role on shop list.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(money < roleprice4) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **do not** have **enough** money in your bank for **that** role.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        message.member.roles.add(role4)
        .then(() => {

            db.subtract(`bankcash_${message.guild.id}_${message.author.id}`, roleprice4);


            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_yes:814804674041479198> | Succesfully **bought** role ${role4} for ${roleprice4}$.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        })

        .catch((error) => {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })
        })

    }

    if(purchase === '5') {

        if(!role5) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | I cant **find** that role on shop list.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(money < roleprice5) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_njet:814803975798521866> | You **do not** have **enough** money in your bank for **that** role.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        }

        message.member.roles.add(role5)
        .then(() => {

            db.subtract(`bankcash_${message.guild.id}_${message.author.id}`, roleprice5);

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Buy`, client.user.avatarURL())
            .setDescription(`<:infected_yes:814804674041479198> | Succesfully **bought** role ${role5} for ${roleprice5}$.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)

        })

        .catch((error) => {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })
        })

    }
}
module.exports.help = {
    name:"buy",
    aliases: ["shoping"]
  }