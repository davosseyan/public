const Discord = require('discord.js');
const config = require('../config.json')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    if(!args[0]) {

        const mqrkelich = config.mqrkelichID
        const kyfox = config.KyFoxID

        if(message.member.id === mqrkelich || message.member.id === kyfox) {

            const help = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Help`, client.user.avatarURL())
            .addField('<a:infected_loading:814807500540346459> | Info', `${config.strelica} \`${PREFIX}help info\``)
            .addField('<:lightning_music:823524639363301387> | Music', `${config.strelica} \`${PREFIX}help music\``)
            .addField('<:atomic_staff:813009820931588136> | Moderation', `${config.strelica} \`${PREFIX}help moderation\``)
            .addField('<a:infected_novost:818437551341305876> | Leveling', `${config.strelica} \`${PREFIX}help leveling\``)
            .addField('<a:vp_ann:814395137945239552> | Fun', `${config.strelica} \`${PREFIX}help fun\``)
            .addField('<a:atomic_coin:817782205753065502> | Economy', `${config.strelica} \`${PREFIX}help economy\``)
            .addField('<:atomic_dev:817783379617513502> | Developer', `${config.strelica} \`${PREFIX}help developer\``)
            .setColor(message.guild.me.displayHexColor)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            await message.channel.send(help)

        } else {

            const help = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Help`, client.user.avatarURL())
            .addField('<a:infected_loading:814807500540346459> | Info', `${config.strelica} \`${PREFIX}help info\``)
            .addField('<:lightning_music:823524639363301387> | Music', `${config.strelica} \`${PREFIX}help music\``)
            .addField('<:atomic_staff:813009820931588136> | Moderation', `${config.strelica} \`${PREFIX}help moderation\``)
            .addField('<a:infected_novost:818437551341305876> | Leveling', `${config.strelica} \`${PREFIX}help leveling\``)
            .addField('<a:vp_ann:814395137945239552> | Fun', `${config.strelica} \`${PREFIX}help fun\``)
            .addField('<a:atomic_coin:817782205753065502> | Economy', `${config.strelica} \`${PREFIX}help economy\``)
            .setColor(message.guild.me.displayHexColor)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            await message.channel.send(help)

        }
    }

    if(args[0] === 'moderation' || args[0] === 'mod') {

        const moderation = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Moderation`, client.user.avatarURL())
        .addField('<:atomic_staff:813009820931588136> | Moderation', '`setlang` | `tempmute` | `remove-warn` | `warns` | `unban` | `setprefix` | `kick` | `ban` | `purge` | `mute` | `warn` | `lock` | `unmute` | `slowmode`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(moderation)

    }

    if(args[0] === 'info') {

        const moderation = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Info`, client.user.avatarURL())
        .addField('<a:infected_loading:814807500540346459> | Info', '`invite` | `ping` | `help` | `serverinfo` | `userinfo` | `botinfo` | `mainserver`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(moderation)

    }

    if(args[0] === 'music') {

        const moderation = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .addField('<:lightning_music:823524639363301387> | Music', '`play` | `skip` | `autoplay` | `pause` | `volume` | `resume` | `loop` | `stop` | `queue`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(moderation)

    }

    if(args[0] === 'leveling') {

        const moderation = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
        .addField('<a:infected_novost:818437551341305876> | Leveling', '`setlevel` | `setleveling` | `rank`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(moderation)

    }

    if(args[0] === 'fun') {

        const fun = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Fun`, client.user.avatarURL())
        .addField('<a:vp_ann:814395137945239552> | Fun', '`minecraft` | `meth` | `8ball` | `trash` | `airpods` | `affect` | `mcskin` | `art` | `stonks` | `snipe` | `slap` | `hug` | `kiss` | `afk` | `av` | `meme` | `ship` | `simp`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(fun)

    }

    if(args[0] === 'economy') {

        const economy = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .addField('<a:atomic_coin:817782205753065502> | Economy', '`removemoney` | `addmoney` | `removefromshop` | `addtoshop` | `shop` | `buy` | `deposit` | `withdraw` | `bal` | `work` | `beg` | `crime` | `rob` | `pay` | `daily`')
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(economy)

    }

    if(args[0] === 'developer') {

        const mqrkelich = config.mqrkelichID
        const kyfox = config.KyFoxID
    
        if(message.member.id === mqrkelich || message.member.id === kyfox) {
    
            const developer = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Developer`, client.user.avatarURL())
            .addField('<:atomic_dev:817783379617513502> | Developer', '`eval` | `restart`')
            .setColor(message.guild.me.displayHexColor)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(developer)
    
        } else return;

    }

}
module.exports.help = {
    name:"help",
    aliases: ["commands"]
}