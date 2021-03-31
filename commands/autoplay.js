const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription(`> <a:lighting_ann:814395137945239552> | ${await client.translate('Loading please wait..', message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    const msg = await message.channel.send(embed)

    const { channel } = message.member.voice;

    const channelvoice = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('You need to be in voice channel to play music.', message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    if (!channel) return msg.edit(channelvoice);

    const permsembed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('I do not have enough permissions to join your voice channel.', message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    const permissions = channel.permissionsFor(client.user);
    if (!permissions.has("CONNECT")) return msg.edit(permsembed);
    if (!permissions.has("SPEAK")) return msg.edit(permsembed);
    
    let queue = await client.distube.getQueue(message);

    if(queue) {

        let mode = client.distube.toggleAutoplay(message);

        const embed2 = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_yes:814804674041479198> | ${await client.translate(`Succesfully set autoplay mode to \`${mode ? 'On' : 'Off'}\`.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed2)

    } else {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('Theres nothing in the queue, i can not set autoplay anything.', message)}.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed)

    }

}
module.exports.help = {
    name:"autoplay",
    aliases: ["autoplay"]
  }