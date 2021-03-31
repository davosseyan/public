const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Invite`, client.user.avatarURL())
    .setDescription(`<a:vp_ann:814395137945239552> | ${await client.translate(`You can invite.`, message)} **${client.user.username}** **[${await client.translate(`here.`, message)}](https://discord.com/api/oauth2/authorize?client_id=808336313681575986&permissions=8&scope=bot)**.`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    await message.channel.send(embed)

}
module.exports.help = {
    name:"invite",
    aliases: ["inv"]
}