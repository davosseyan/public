const Discord = require('discord.js')

exports.run = async (client, message, args) => {


    const pitanje = args.splice(0).join(' ');

    if(!pitanje) {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - 8Ball`, client.user.avatarURL())
        .setDescription(`<:lightning_njet:814803975798521866> | ${await client.translate('Please insert a question.', message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        return message.channel.send(embed)

    }

    const odgovori = [
        'Maybe.',
        'Maybe.',
        'Certainly not.',
        'I hope so.',
        'Not in your wildest dreams.',
        'There is a good chance.',
        'Quite likely.',
        'I think so.',
        'I hope not.',
        'I hope so.',
        'Never!',
        'Ahaha! Really?!?',
        'Pfft.',
        'Sorry, bucko.',
        'Hell, yes.',
        'Hell to the no.',
        'The future is bleak.',
        'The future is uncertain.',
        'I would rather not say.',
        'Who cares?',
        'Possibly.',
        'Never, ever, ever.',
        'There is a small chance.',
        'Yes!'
    ];

    let odgovor =
    odgovori[Math.floor(Math.random() * odgovori.length)]

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - 8Ball`, client.user.avatarURL())
    .addField(`<a:lightning_ann:814395137945239552> | ${await client.translate('Question.', message)}`, `> \`${pitanje}\``)
    .addField(`<:lightning_zapisnik:821641399555325963> | ${await client.translate('Answer.', message)}`, `> \`${await client.translate(`${odgovor}`, message)}\``)
    .setThumbnail(message.guild.iconURL({ dynamic:true }))
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    message.channel.send(embed)

        
}
module.exports.help = {
    name:"8ball",
    aliases: ["question"]
}