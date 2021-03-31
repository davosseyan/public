const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let balinv = await db.fetch(`invcash_${message.guild.id}_${user.id}`);
    let balbank = await db.fetch(`bankcash_${message.guild.id}_${user.id}`);
    if (balinv === null) balinv = 0;
    if (balbank === null) balbank = 0;

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .addField(`> <a:atomic_novost:818437551341305876> ${user.tag}`, `\u200B\n<a:atomic_coin:817782205753065502> | **Pocket:** \`${balinv}\`\n<:lighting_card:820693754469548032>  | **Bank:** \`${balbank}\`\n<:atomic_event:818442553639567395> | **All:** \`${balinv + balbank}\``)
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
}

module.exports.help = {
    name: "bal",
    aliases: ["balance"]
}