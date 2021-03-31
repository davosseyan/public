const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const reason = args.join(" ") ? args.join(" ") : "AFK"

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - AFK`, client.user.avatarURL())
    .setDescription(`<:atomic_afk:815246594034892819> | ${await client.translate(`I put you **${message.author.username}** to afk.`, message)}`)
    .addField(`<a:vp_ann:814395137945239552> | ${await client.translate(`Reason`, message)}:`, `\`${reason}\``)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed).then((msg) => {
      setTimeout(async function () {

        await db.set(`afk-${message.author.id}+${message.guild.id}`, reason)

      }, 1000)
  })

    message.member.setNickname(`[AFK] ${message.author.username}`).catch(error => {

      const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username} - AFK`, client.user.avatarURL())
      .setDescription(`> <:atomic_njet:814803975798521866> | I didnt set your AFK name.`)
      .setColor(message.guild.me.displayHexColor)
      .setTimestamp()
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      message.channel.send(embed)

    });


}

module.exports.help = {
  name:"afk",
  aliases: ["afk"]
}