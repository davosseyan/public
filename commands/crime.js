const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    
    let member = message.author;
    let author = await db.fetch(`crime_${message.guild.id}_${member.id}`)
    
    let timeout = 3 * 60000;
        
    if (author !== null && timeout - (Date.now() - author) > 10) {
    let time = ms(timeout - (Date.now() - author))
        
    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<a:atomic_ne:814817393686740992> | ${await client.translate(`You've already did crime. Come back in \`${time.hours}h, ${time.minutes}m, and ${time.seconds}s\`.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed2)

    } else {
    
    let replies = [

        "Robbed Bank",
        "Robbed Bank",
        "Robbed Goldsmith",
        "Robbed Your Mom",
        "Robbed a Woman",
        
    ];
    
    let result = Math.floor((Math.random() * replies.length));
    let amount = Math.floor(Math.random() * 1000) + 1;

    db.add(`invcash_${message.guild.id}_${member.id}`, amount)
    db.set(`crime_${message.guild.id}_${member.id}`, Date.now())

    const embed1 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Crime`, client.user.avatarURL())
    .setDescription(`<a:atomic_coin:817782205753065502> | ${await client.translate(`You ${replies[result]}\n<a:atomic_coin:817782205753065502> | You stole: \`${amount}$\``, message)}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed1);
        
    };
}
module.exports.help = {
    name:"crime",
    aliases: ["cr"]
}