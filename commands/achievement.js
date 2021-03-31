const Discord = require('discord.js')

const make = require("claire-cord");

exports.run = async (client, message, args) => {

    let text = args.splice(0).join(' ')

    if(!text) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Minecraft`, client.user.avatarURL())
        .setDescription(`<:lightning_njet:814803975798521866> | ${await client.translate('Please put some text.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)

    }

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Minecraft`, client.user.avatarURL())
    .setDescription(`<a:lighting_ann:814395137945239552> | ${await client.translate('Loading please wait..', message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    var editmessage = await message.channel.send(embed2)

    let img = await new make.Minecraft().getImage(`${text}`);

    let attach = new Discord.MessageAttachment(img, "minecraft.png");;
    await message.channel.send(attach)
    await editmessage.delete();
        
}
module.exports.help = {
    name:"achievement",
    aliases: ["minecraft"]
}