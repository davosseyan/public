const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const clientping = `\`\`\`js\n${client.ws.ping} ms\n\`\`\``
    const messagesendtime = `\`\`\`js\n${Date.now() - message.createdTimestamp} ms\n\`\`\``

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Ping`, client.user.avatarURL())
    .addField('<a:lightning_strelica:822044724318961724> | Discord Websocket', clientping, true)
    .addField('<a:lightning_novost:818437551341305876> | Message send time', messagesendtime, true)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)

}
module.exports.help = {
    name:"ping",
    aliases: ["ping"]
}