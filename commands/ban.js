const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('BAN_MEMBERS')) {

        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You dont have permissions to use this command.\n<a:lighting_desna_strelica:814927243432296468> | Needed permission `BAN_MEMBERS`!', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

    var user = message.mentions.users.first();
    let warnUser = message.mentions.members.first();

    if(!user) {
        const mention = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt mention anyone.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(mention)
    }

    if(warnUser === message.member) {

        const urself = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You cant ban your self.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(urself)

    }

    let HighRole = message.member.roles.highest.position;

    let getWarnedHighRole = warnUser.roles.highest.position;

    if (HighRole < getWarnedHighRole) {

        const ucantlol = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You cant ban users with role thats bigger than yours.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    if (HighRole === getWarnedHighRole) {

        const ucantlol = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You cant ban users with role same as yours.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    var reason = args.splice(1).join(' ');
    if (user && !reason) {

        const noreason = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('Please put reason for ban.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noreason)
        
    }



    message.guild.members.ban(user).then(async () => {

        const banned = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<a:vp_ann:814395137945239552> | ${await client.translate('Succesfully baned user', message)} **${user.tag}**.`)
        .addField('<:atomic_staff:813009820931588136> | Moderator:', `\`${message.author.username}\``)
        .addField('<a:VP_warning:815946287450554418> | Reason:', `\`${reason}\``)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(banned)

    }).catch(error => {

        const catnbanthatuser = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Ban`, client.user.avatarURL())
        .setDescription(`<a:x_:814899010078900265> |  There was some error while handling the command.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(catnbanthatuser).then(() => {

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

}
module.exports.help = {
    name:"ban",
    aliases: ["ban"]
  }