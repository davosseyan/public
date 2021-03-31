const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warns`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You **dont** have **permissions** to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

    let user = message.mentions.users.first();
    let warnUser = message.mentions.members.first();

    if(!user) {
        const mention = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warns`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You did not mention anyone.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(mention)
    }

    if(warnUser === message.member) {

        const urself = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You cant unwarn yourself.')
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
        .setDescription('<:atomic_njet:814803975798521866> | You cant unwarn users with role thats bigger than yours.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    if (HighRole === getWarnedHighRole) {

        const ucantlol = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You cant unwarn users with role same as yours.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(ucantlol)
    }

    if(!db.get(`warn1_${message.guild.id}_${user.id}`) && !db.get(`warn2_${message.guild.id}_${user.id}`) && !db.get(`warn3_${message.guild.id}_${user.id}`) ) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> | **${user.username}** has \`0\` warns.\n<a:lightning_desna_strelica:814927243432296468> | You **cant** delete warns from \`${user.tag}\`.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        message.channel.send(embed)
        
    }

    if(db.get(`warn3_${message.guild.id}_${user.id}`)) {

        db.delete(`warn3_${message.guild.id}_${user.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Remove Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> | **Succefully** removed warns for user **${user.tag}**`)
        .addField('<:lightning_staff:813009820931588136> | Moderator', `\`${message.author.tag}\``)
        .addField(`<a:VP_warning:815946287450554418> | Warn Count for ${user.tag}`, '`2`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

    if(db.get(`warn2_${message.guild.id}_${user.id}`)) {

        db.delete(`warn2_${message.guild.id}_${user.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Remove Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> | **Succefully** removed warns for user **${user.tag}**`)
        .addField('<:lightning_staff:813009820931588136> | Moderator', `\`${message.author.tag}\``)
        .addField(`<a:VP_warning:815946287450554418> | Warn Count for ${user.tag}`, '`1`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

    if(db.get(`warn1_${message.guild.id}_${user.id}`)) {

        db.delete(`warn1_${message.guild.id}_${user.id}`)

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Remove Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> | **Succefully** removed warns for user **${user.tag}**`)
        .addField('<:lightning_staff:813009820931588136> | Moderator', `\`${message.author.tag}\``)
        .addField(`<a:VP_warning:815946287450554418> | Warn Count for ${user.tag}`, '`0`')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

}
module.exports.help = {
    name:"remove-warn",
    aliases: ["removewarn", "warndelete", "deletewarn", "unwarn"]
}