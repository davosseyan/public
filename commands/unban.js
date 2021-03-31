const Discord = require('discord.js')


exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {

        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You dont have permissions to use this command.\n<a:lighting_desna_strelica:814927243432296468> | Needed permission \`BAN_MEMBERS\`!`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)

    }

    if (!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate(`Please insert a ID of person you want to unban.`),message})`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)
          
    }

    let member = await client.users.fetch(args[0])

    message.guild.fetchBans().then( bans => {
    const user = bans.find(ban => ban.user.id === member.id);

    let reason = args.slice(1).join(" ");
    
    if(!reason) reason = 'None';

    if (user) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unban`, client.user.avatarURL())
        .setDescription(`<:lightning_yes:814804674041479198> | Succesfully unbanned user ${member}.`) 
        .addField('<:lightning_staff:813009820931588136> | Moderator', `\`${message.author.tag}\``)
        .addField('<a:lightning_novost:818437551341305876> | Reason', `\`${reason}\``)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)
        return message.guild.members.unban(member).catch(() => {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Unban`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | There was some error, didnt unban a person.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed)

        })

    } else {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Unban`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | There was some error, didnt found a person.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    })
    
}
module.exports.help = {
    name:"unban",
    aliases: ["unban"]
}