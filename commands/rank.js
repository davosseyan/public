const Discord = require('discord.js');

const yuricanvas = require("yuri-canvas");

const db = require('quick.db')

exports.run = async (client, message, args) => {

    try {

    if(!db.get(`leveling_${message.guild.id}`)) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
        .setDescription('<:infected_njet:814803975798521866> | **Leveling** system is turned **off** in this **server**.')
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }
    if(db.get(`leveling_${message.guild.id}`)) {

        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

        const loading = await message.channel.send('**Loading please wait..**')

        let username = user.tag
        let needxp = 300;

        let xp = db.fetch(`xp_${message.guild.id}_${message.author.id}`) || '0'
        let level = db.fetch(`level_${message.guild.id}_${message.author.id}`) || '0'


        let image = await yuricanvas.rank({ 
                username, 
                level: level, 
                neededXP: needxp, 
                currentXP: xp, 
                avatarURL: user.displayAvatarURL({ format: "png" }), 
                color: "white", 
                background: "https://cutewallpaper.org/21/discord-backgrounds/How-can-I-create-a-transparent-background-for-discord-with-.png"
        })
        
        let attachment = new Discord.MessageAttachment(image, "rank.png");
        loading.delete()
          return message.channel.send(attachment)

    }
            
    } catch(error) {

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Error`, client.user.avatarURL())
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setThumbnail(client.user.avatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            return message.channel.send(embed2).then(() => {

                const channel = client.channels.cache.get('823834575305703465')

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setThumbnail(client.user.avatarURL())
                .addField('Error occured in', `Server: ${message.guild.name}\nID: ${message.guild.id}`, true)
                .addField('Server Owner ID:', `${message.guild.ownerID}`, true)
                .setColor('RED')
                .setTimestamp()
                return channel.send(embed)
        })

    }
}
module.exports.help = {
    name:"rank",
    aliases: ["level"]
  } 