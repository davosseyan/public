const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setAuthor(`${client.user.username} - Simp`, client.user.avatarURL())
        .setDescription(`<a:atomic_simp:814953935953330216> | **${user.username}**'s simprate is **${rate}%**.`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size:1024 }))
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)

}
module.exports.help = {
  name:"simp",
  aliases: ["simp"]
}