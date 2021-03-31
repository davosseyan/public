const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    
    let member = message.author;
    let author = await db.fetch(`rob_${message.guild.id}_${member.id}`)
    
    let timeout = 5 * 60000;
        
    if (author !== null && timeout - (Date.now() - author) > 10) {
    let time = ms(timeout - (Date.now() - author))
        
    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<:atomic_njet:814803975798521866> | You've **already** did rob someone, Try again in: \`${time.minutes}m, and ${time.seconds}s\`!`)
    .setColor(message.guild.me.displayHexColor)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed2)

    } else {
    
    const user = message.mentions.users.first();

    if(!user) {
        const mention = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Rob`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | You did **not** mention **anyone**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(mention)
    }

    const userBal = db.fetch(`invcash_${message.guild.id}_${user.id}`)

    let randomMoney = Math.floor(Math.random() * 200) + 1;

    if(userBal < randomMoney) {
        const nomoney = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Rob`, client.user.avatarURL())
        .setDescription('<:atomic_njet:814803975798521866> | That man is **poor** and u cant steal from him..')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        return message.channel.send(nomoney)

    }

    db.add(`invcash_${message.guild.id}_${member.id}`, randomMoney)
    db.subtract(`invcash_${message.guild.id}_${user.id}`, randomMoney)
    db.set(`rob_${message.guild.id}_${member.id}`, Date.now())

    const embed1 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Rob`, client.user.avatarURL())
    .setDescription(`<a:atomic_coin:817782205753065502> | You robbed **${user.tag}**\n<a:atomic_coin:817782205753065502> | You got: **${randomMoney}$**`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed1);
        
    };
}
module.exports.help = {
    name:"rob",
    aliases: ["rob"]
}