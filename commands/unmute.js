const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You dont have permissions to use this command\n<:siva_strelica:814187724008849430> Needed permission \`MANAGE_MESSAGES\`.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!user) {
            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You did not mention anyone.`),message})`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)
        }

        if(user === message.member) {

            const urself = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant unmute yourself.`), message})`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(urself)
    
        }

        let HighRole = message.member.roles.highest.position;

        let getWarnedHighRole = user.roles.highest.position;
    
        if (HighRole < getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant unmute users with role thats bigger than yours.`), message})`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }
    
        if (HighRole === getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You cant unmute users with role same as yours.`), message})`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase().includes('muted'))

        if (!user.roles.cache.has(role.id)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`That user isnt muted`), message})`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        user.roles.remove(role).catch((error) => {

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
                .setDescription(`\`\`\`js\n${TypeError(error)}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)

            })
        })

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unmute`, client.user.avatarURL())
        .setDescription(`<:lighting_yes:814804674041479198> | ${await client.translate(`Succesfully unmuted ${user}!\n<a:lighting_desna_strelica:814927243432296468> | ${user} Enjoy talking again.`),message})`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
}
module.exports.help = {
    name:"unmute",
    aliases: ["unmute"]
}