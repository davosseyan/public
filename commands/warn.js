const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {

        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You dont have permissions to use this command.\n<a:lighting_desna_strelica:814927243432296468> | Needed permission `MANAGE_MESSAGES`!', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

    var user = message.mentions.users.first();
    let warnUser = message.mentions.members.first();

    if(!user) {
        const mention = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt mention anyone.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(mention)
    }

    if(warnUser === message.member) {

        const urself = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant warn yourself.`),message})`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(urself)

    }

    let HighRole = message.member.roles.highest.position;

    let getWarnedHighRole = warnUser.roles.highest.position;

    if (HighRole < getWarnedHighRole) {

        const ucantlol = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant warn users with role thats bigger than yours.`),message})`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    if (HighRole === getWarnedHighRole) {

        const ucantlol = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant warn users with role same as yours.`),message})`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    if(user) {

        let member = await message.guild.members.fetch(user);

        if(!db.get(`warn1_${message.guild.id}_${user.id}`) && !db.get(`warn2_${message.guild.id}_${user.id}`) && !db.get(`warn3_${message.guild.id}_${user.id}`) ) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
            .setDescription(`<a:loading:814807500540346459> | ${user.username} is warned \`1\` times.`)
            .addField('<a:VP_warning:815946287450554418> | Warn Count', '`1`')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed).then((msg) => {
                setTimeout(function () {

                    db.set(`warn1_${msg.guild.id}_${user.id}`, 'warn1')

                }, 2000)
            })
            
        }

        if(db.get(`warn1_${message.guild.id}_${user.id}`)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
            .setDescription(`<a:loading:814807500540346459> | ${user.username} is warned \`2\` times.`)
            .addField('<a:VP_warning:815946287450554418> | Warn Count', '`2`')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed).then((msg) => {
                setTimeout(function () {

                    db.set(`warn2_${msg.guild.id}_${user.id}`, 'warn2')
                    db.delete(`warn1_${msg.guild.id}_${user.id}`)

                }, 2000)
            })

        }

        if(db.get(`warn2_${message.guild.id}_${user.id}`)) {

            db.delete(`warn2_${message.guild.id}_${user.id}`)

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
            .setDescription(`<a:loading:814807500540346459> | ${user.username} is warned \`3\` times, im kicking user!`)
            .addField('<a:VP_warning:815946287450554418> | Warn Count', '`3`')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)

            member.kick('Warn 3').catch(err => {

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
                .setDescription('<:atomic_njet:814803975798521866> I didnt kick a user, there was some error!')
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
          

            })

        }

    }
}
module.exports.help = {
    name:"warn",
    aliases: ["warn"]
}