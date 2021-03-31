const Discord = require('discord.js')
const love = require('discord_love');

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();

    if(!user) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Slap`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | Please **mention** somebody to **slap**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Slap`, client.user.avatarURL())
    .setDescription(`🖐️ | **${message.author.username}** slapped **${user.username}**.`)
    .setImage(love.slap())
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)

}

module.exports.help = {
    name:"slap",
    aliases: ["slap"]
}