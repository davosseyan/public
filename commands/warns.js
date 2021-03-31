const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const noperms = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warns`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate('You dont have permissions to use this command\n<:siva_strelica:814187724008849430> Needed permission `MANAGE_MESSAGES`.', message)}`) 
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(noperms)
    }

    let user = message.mentions.users.first();

    if(!user) {
        const mention = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warns`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate('You didnt mention anyone.', message)} `)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(mention)
    }

    if(!db.get(`warn1_${message.guild.id}_${user.id}`) && !db.get(`warn2_${message.guild.id}_${user.id}`) && !db.get(`warn3_${message.guild.id}_${user.id}`) ) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> |  ${await client.translate('${user.username} has `0` warns.``', message)} `)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        message.channel.send(embed)
        
    }

    if(db.get(`warn3_${message.guild.id}_${user.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> | ${user.username} has \`3\` warns.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

    if(db.get(`warn2_${message.guild.id}_${user.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> |  ${await client.translate('${user.username} has \`2\` warns.```', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

    if(db.get(`warn1_${message.guild.id}_${user.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Warn`, client.user.avatarURL())
        .setDescription(`<a:lightning_strelica:822044724318961724> |  ${await client.translate('${user.username} has \`1\` warn.```', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        return message.channel.send(embed)
        
    }

}
module.exports.help = {
    name:"warns",
    aliases: ["warns"]
}