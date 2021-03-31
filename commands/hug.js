const Discord = require('discord.js')
const love = require('discord_love');

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();

    if(!user) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Hug`, client.user.avatarURL())
        .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`Please mention somebody to hug.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Hug`, client.user.avatarURL())
    .setDescription(`<a:BearHug:820227649543733258> | **${message.author.username}** ${await client.translate(`hugged.`, message)} **${user.username}**.`)
    .setImage(love.hug())
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)

}

module.exports.help = {
    name:"hug",
    aliases: ["hug"]
}