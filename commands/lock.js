const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {

        const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni
        const reason = args.splice(1).join(' ');

        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            const noperms = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Lock`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_CHANNELS`')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(noperms)
        }

        if(!args[0]) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Lock`)
            .setDescription(`<:lighting_njet:814803975798521866> | **Invalid** usage!\n<a:lighting_desna_strelica:814927243432296468> | **Valid** usage: \`${PREFIX}lock <on/off>\`.`)
            .setThumbnail(message.guild.iconURL({ dynamic:true }))
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed)

        }

        if(args[0] === 'on') {

            message.channel.overwritePermissions([
                {
                id: message.guild.id,
                deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                },
            ]).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Lock`)
                .setDescription(`<:lighting_yes:814804674041479198> | Succesfully locked down ${message.channel}.`)
                .addField('<a:lighting_warning:815946287450554418> | Reason', `${reason || '`None`'}`)
                .setThumbnail(message.guild.iconURL({ dynamic:true }))
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
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

        if(args[0] === 'off') {

            message.channel.overwritePermissions([
                {
                id: message.guild.id,
                allow: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                },
            ]).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Lock`)
                .setDescription(`<:lighting_yes:814804674041479198> | Succesfully unlocked down ${message.channel}.`)
                .addField('<a:lighting_warning:815946287450554418> | Reason', `${reason || '`None`'}`)
                .setThumbnail(message.guild.iconURL({ dynamic:true }))
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
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
    name:"lock",
    aliases: ["lock", "unlock"]
}