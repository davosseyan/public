const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    
    let user = message.author;
    let timeout = 86400000;
    let amount = 3000;

    let daily = await db.fetch(`daily_${user.id}`);

    if(daily !== null && timeout - (Date.now() - daily) > 0){
    let time = ms(timeout - (Date.now() - daily));

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<:atomic_njet:814803975798521866> | ${await client.translate(`You've already collected the daily reward come back in \`${time.hours}h, ${time.minutes}m, and ${time.seconds}s\`!`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    return message.channel.send(embed2)

    } else {

        db.add(`invcash_${message.guild.id}_${user.id}`, amount);
        db.set(`daily_${user.id}`, Date.now());

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<a:atomic_coin:817782205753065502> | ${await client.translate(`Successfully added **${amount}** coins to your account.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
}
module.exports.help = {
    name:"daily",
    aliases: ["daily"]
  }