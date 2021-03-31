const Discord = require('discord.js')

const make = require("claire-cord");

exports.run = async (client, message, args) => {

    let skin = args[0]

    if(!skin) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Minecraft Skin`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | Please **put** name of minecraft **account**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Minecraft Skin`, client.user.avatarURL())
    .setDescription(`<:lightning_zapisnik:821641399555325963> | **${skin}'s** minecraft skin.`)
    .setThumbnail(`https://mc-heads.net/avatar/${skin}/256.png`)
    .setImage(`https://mc-heads.net/body/${skin}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)

        
}
module.exports.help = {
    name:"mcskin",
    aliases: ["minecraftskins", "minecraftskin", "skin", "minecraft-skin"]
}