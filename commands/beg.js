const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

        let user = message.author;
        let timeout = 100000;
        let randomime = [
    
            "mqrkelich",
            "Ni2htmareWolf",
            "Phoxx", 
            "Among Bot",
            "KyFox", 
            "Pepe",
            "Rick Astley",
            "Nikola Tesla",
            "Your Mom",
            "Mirovic",
        ];
        
        let index = Math.floor(Math.random() * (randomime.length - 1) + 1);


        let daily = await db.fetch(`beg_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0) {

            let time = ms(timeout - (Date.now() - daily));

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<:atomic_njet:814803975798521866> |  ${await client.translate(`If you want to **beg** more come back in \`${time.minutes}m, and ${time.seconds}s\`!`, message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed2)

        } else {

            let amountrun = Math.floor(Math.random() * 500) + 1;
            db.add(`invcash_${message.guild.id}_${user.id}`, amountrun)
            db.set(`beg_${user.id}`, Date.now())

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
            .setDescription(`<a:atomic_coin:817782205753065502> | ${await client.translate(`\`${randomime[index]}\` gave u \`${amountrun}\` coins!`, message)}`)
            .setColor(message.guild.me.displayHexColor)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }
}
module.exports.help = {
    name:"beg",
    aliases: ["beg"]
  }