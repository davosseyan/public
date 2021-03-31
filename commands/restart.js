const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async(client, message, args) => {

    const firstowner = config.firstowner
    const otherowner = config.otherowner

    const kurac = new Discord.MessageEmbed()
        .setTitle('<a:lighting_warning:815946287450554418> Restarting...')
        .setDescription('> <a:lighting_loading:814807500540346459> Expect 5-10 seconds of down time, bot is restarting')

    if (message.member.id === mqrkelich || message.member.id === otherowner) {

        await message.channel.send(kurac);

        process.exit()
    } else {
        message.channel.send('Only bot developers can do this command. <:spit:814917785435373579>')
    }
}
module.exports.help = {
    name: "restart",
    aliases: ["restartbot"]
}