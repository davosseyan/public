const db = require('quick.db');
const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {

        let user = message.mentions.users.first() 

        const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

        let member = db.fetch(`invcash_${message.guild.id}_${message.author.id}`)
    
        if (!user) {

            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | You did **not** mention **anyone**.\n<a:lightning_strelica:822044724318961724> | **Valid** usage: \`${PREFIX}pay <@user> <amout>\`.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)
        }


        if (!args[1]) {

            const amount = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | You did **not** specify amout u want to **give**.\n<a:lightning_strelica:822044724318961724> | **Valid** usage: \`${PREFIX}pay <@user> <amout>\`.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

            return message.channel.send(amount)
        }

        if (isNaN(args[1])) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> | You did **not** specify amout u want to **give**.\n<a:lightning_strelica:822044724318961724> | **Valid** usage: \`${PREFIX}pay <@user> <amout>\`.`)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
            
        }

        if (message.content.includes('-')) { 

            const Negative = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You can **not** pay **negative** money..')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

            return message.channel.send(Negative)
        }
    
        if (member < args[1]) {

            const cash = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You **dont** have that much **money** in your pocket.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

            return message.channel.send(cash)
        }

        const succesfully = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
        .setDescription(`<a:atomic_coin:817782205753065502> | **${message.author.tag}** paid \`${args[1]}\` coins to **${user.tag}**`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    
        message.channel.send(succesfully)
        db.add(`invcash_${message.guild.id}_${user.id}`, args[1])
        db.subtract(`invcash_${message.guild.id}_${message.author.id}`, args[1])
}
module.exports.help = {
    name:"pay",
    aliases: ["pay"]
  }