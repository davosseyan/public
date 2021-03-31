const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!user) {
            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You **did** not **mention** anyone.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)
        }

        if(user === message.member) {

            const urself = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You cant mute yourself.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(urself)
    
        }

        let HighRole = message.member.roles.highest.position;

        let getWarnedHighRole = user.roles.highest.position;
    
        if (HighRole < getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You cant mute users with role thats bigger than yours.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }
    
        if (HighRole === getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You cant mute users with role same as yours.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase().includes('muted'))
        if(!role) {

            try {
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
                .setDescription('<:lighting_yes:814804674041479198> | I dindt found role `Muted`, so im creating one.')
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                const embededit = await message.channel.send(embed)

                let muterole = await message.guild.roles.create({
                    data: {
                        name: '「🔕」Muted',
                        permissions: [],
                        color: 'RED'
                    }
                });

                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async(channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });

                const embed2 = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
                .setDescription(`<:lighting_yes:814804674041479198> | Succefully **created** role ${muterole}!.`)
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                embededit.edit(embed2)
            } catch (error) {

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
            }

        }

        const role2 = message.guild.roles.cache.find(role => role.name.toLowerCase().includes('muted'))
        if (user.roles.cache.has(role2.id)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | That **member** is already **muted**!`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        const member = message.mentions.users.first().tag

        await user.roles.add(role2)
        .then(() => {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Mute`, client.user.avatarURL())
            .setDescription(`<:lighting_yes:814804674041479198> | Succesfully muted member \`${member}\`.`)
            .addField('<:lighting_staff:813009820931588136> | Moderator', `\`${message.author.tag}\``)
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

module.exports.help = {
    name:"mute",
    aliases: ["mute"]
}