
const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {

        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)

    }

    if (!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | Please specify valid time for slowmode.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    const currentCooldown = message.channel.rateLimitPerUser;

    const reason = args[1] ? args.slice(1).join(' ') : 'No Reason';

    if (args[0] === 'off') {

        if (currentCooldown === 0) {

            const alreadyoff = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | The slowmode is already off in this channel.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(alreadyoff)
        }

        const turnedoff = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
        .setDescription(`<:atomic_yep:814804851942359050> | Succesfully turned slow mode **off**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        await message.channel.send(turnedoff)


        return message.channel.setRateLimitPerUser(0, reason)

    }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | Please specify valid time for slowmode.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if (time >= 21600) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You cant set slowmode above 6hours!')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if (currentCooldown === time) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | Slowmode is already set to **${args[0]}**.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        const success = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Slowmode`, client.user.avatarURL())
        .setDescription(`<:atomic_yep:814804851942359050> | Succesfully set slowmode to **${args[0]}**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(success));

}

module.exports.help = {
    name: "slowmode",
    aliases: ["sm"]
}