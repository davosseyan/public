const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Clear`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate('You dont have permissions to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if (!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Clear`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify amout of messages you want to delete.\n<a:lightning_strelica:822044724318961724> | Maximum amout of messages is `99`.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }
    if (isNaN(args[0])) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Clear`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please specify amout of messages you want to delete.\n<a:lightning_strelica:822044724318961724> | Maximum amout of messages is `99`.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }
    if (parseInt(args[0]) > 99) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Clear`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate('Maxium amout of messages you can delete is 100.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
        
    }
    await message.channel.bulkDelete(parseInt(args[0]) + 1).catch((error) => {

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

    const deleted = new Discord.MessageEmbed()
    .setDescription(`<:lightning_yes:814804674041479198> | ${await client.translate(`Succesfully deleted \`${args[0]}\` messages in ${message.channel}.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

    message.channel.send(deleted).then(async msg => {
        msg.delete({ timeout: 3000 }).catch(err => { return; })
    })
}

module.exports.help = {
    name:"clear",
    aliases: ["purge"]
  }