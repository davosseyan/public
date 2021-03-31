const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> |  ${await client.translate(`You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`!')`),message})`
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!user) {
            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate(`You did not mention anyone`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)
        }

        const time = args[1]
        if(!time) {

            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You did not specify time for mute.`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)

        }

        if(user === message.member) {

            const urself = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate(`You cant mute yourself.`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(urself)
    
        }

        let HighRole = message.member.roles.highest.position;

        let getWarnedHighRole = user.roles.highest.position;
    
        if (HighRole < getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate(`You cant mute users with role thats bigger than yours.`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }
    
        if (HighRole === getWarnedHighRole) {
    
            const ucantlol = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> |${await client.translate(`You cant mute users with role thats same as yours.`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(ucantlol)
        }

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase().includes('muted'))
        if(!role) {

            try {
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
                .setDescription(`<:lighting_yes:814804674041479198> | ${await client.translate(`I didnt found role muted, so im creating one.`),message}`)
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
                .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
                .setDescription(`<:lighting_yes:814804674041479198> | ${await client.translate(`Succefully created role ${muterole}!.`),message}`)
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                embededit.edit(embed2)
            } catch (error) {
                console.log(error)
            }

        }

        const role2 = message.guild.roles.cache.find(role => role.name.toLowerCase().includes('muted'))
        if (user.roles.cache.has(role2.id)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`That **member** is already **muted**!`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        const member = message.mentions.users.first().tag

        await user.roles.add(role2)
        .then(() => {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Tempmute`, client.user.avatarURL())
            .setDescription(`<:lighting_yes:814804674041479198> | Succesfully muted member \`${member}\` for \`${time}\`.`)
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

        setTimeout( async function () {

            await user.roles.remove(role2).catch((error) => {

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

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unmuted`, client.user.avatarURL())
            .setDescription(`<:lighting_yes:814804674041479198> | ${await client.translate(`Hey ${member} ur now unmuted, Have **fun** writing again!`),message}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(`${user}`, embed)
        }, ms(time));


}

module.exports.help = {
    name:"tempmute",
    aliases: ["tempmute"]
}