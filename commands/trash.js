const Discord = require('discord.js')

const make = require("claire-cord");

exports.run = async (client, message, args) => {

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Trash`, client.user.avatarURL())
    .setDescription('<a:lighting_ann:814395137945239552> |  ${await client.translate(`**Loading** please **wait..**`),message}`)')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    var editmessage = await message.channel.send(embed2)

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });

    let img = await new make.Delete().getImage(`${avatar}`);

    let attach = new Discord.MessageAttachment(img, "slap.png");;
    await message.channel.send(attach)
    await editmessage.delete();
        
}
module.exports.help = {
    name:"trash",
    aliases: ["delete"]
  }