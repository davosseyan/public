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

    let queue = await client.distube.getQueue(message);

    if(queue) {

        if(!args[0]) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
            .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('Please insert number between 1-100 for volume.', message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return msg.edit(embed)
            
        }

        if(isNaN(args[0])) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
            .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('Please insert number between 1-100 for volume.', message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return msg.edit(embed)
        }

        const embedvolume = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_njet:814803975798521866> | ${await client.translate('You may only set the volume to 1-100.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))


        if ((args[0]) > 100) return msg.edit(embedvolume)
        if ((args[0]) < 1) return msg.edit(embedvolume)

        client.distube.setVolume(message, args[0]);

        const embed2 = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_yes:814804674041479198> | ${await client.translate(`Succefully set volume to **${args[0]}%**.`, message)}.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed2)

    } else {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_njet:814803975798521866> | **There's nothing** in the queue, i can not **set volume**.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed)

    }

}
module.exports.help = {
    name:"volume",
    aliases: ["v"]
  }