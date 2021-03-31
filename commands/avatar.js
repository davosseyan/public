const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let avatar = member.displayAvatarURL({ dynamic:true, size:4096 })

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Avatar`, client.user.avatarURL())
    .setTitle(`<:lightning_zapisnik:821641399555325963> | ${member.username}'s avatar`)
    .setImage(avatar)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed);
  }

module.exports.help = {
  name:"avatar",
  aliases: ["av"]
}