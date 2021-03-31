const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription('> <a:lightning_loading:814807500540346459> | **Loading** please **wait**..')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    const msg = await message.channel.send(embed)

    const { channel } = message.member.voice;

    const channelvoice = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription('> <:lightning_njet:814803975798521866> | **You need** to be in **voice channel** to play **music**')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    if (!channel) return msg.edit(channelvoice);

    const permsembed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription('> <:lightning_njet:814803975798521866> | I **do not** have enough **permissions** to join your **voice channel**.')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    const permissions = channel.permissionsFor(client.user);
    if (!permissions.has("CONNECT")) return msg.edit(permsembed);
    if (!permissions.has("SPEAK")) return msg.edit(permsembed);

    if(!args[0]) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription('> <:lightning_njet:814803975798521866> | You did not **specify** name of **song** you want to **play**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed)

    }
    
    const music = args.join(" ");

    client.distube.play(message, music)
    msg.delete()

}
module.exports.help = {
    name:"play",
    aliases: ["p"]
  }