const Discord = require('discord.js')

exports.run = async (client, message, args) => {  
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Snipe`, client.user.avatarURL())
        .setDescription(`<:infected_njet:814803975798521866> | There's nothing to snipe now..`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)
        
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Snipe`, client.user.avatarURL())
    .setThumbnail(msg.member.user.displayAvatarURL({ dynamic: true }))
    .addField('<:blue_arrow:814189619888259092> | Content:', `\`${msg.content}\``)
    .addField('<:infected_vatra:818112035602694145> | Author:', `\`${msg.author}\``)
    .setImage(msg.image)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    return message.channel.send(embed);

}
module.exports.help = {
    name:"snipe",
    aliases: ["snipe"]
  }