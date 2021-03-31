const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Main server`, client.user.avatarURL())
        .setDescription(`<a:vp_ann:814395137945239552> | You can join the main server of **${client.user.username}** **[here](https://discord.gg/32JrbBcEQ3)**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    await message.channel.send(embed)

}
module.exports.help = {
    name: "mainserver",
    aliases: ["ms", "server"]
}