const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
    .setDescription('> <a:lightning_loading:814807500540346459> | **Loading** please **wait**..')
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))

    const msg = await message.channel.send(embed)

    let queue = await client.distube.getQueue(message);

    if(queue) {

        message.channel.send(`\`\`\`js\n` + queue.songs.map((song, id) => `${id+1}) ${song.name} ${song.formattedDuration}\`\`\``).join("\n```js\n"))
        msg.delete()
    } else {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_njet:814803975798521866> | **There's nothing** in the queue.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return msg.edit(embed)

    }
}
module.exports.help = {
    name:"queue",
    aliases: ["q"]
  }