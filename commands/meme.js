const Discord = require('discord.js');
const got = require('got');

exports.run = async (client, message, args) => {

    const memeEmbed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;

        let upvote = client.emojis.cache.get('799703931663417416') // your custom emoji id lol
        let downvote = client.emojis.cache.get('799703966137057336') // your custom emoji id as well lol

        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeUrl}`)
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor(message.guild.me.displayHexColor)
        memeEmbed.setTimestamp()
        memeEmbed.setFooter(`👍 ${memeUpvotes} | 👎 ${memeDownvotes} | 💬 ${memeNumComments}`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(memeEmbed);
    })
}

module.exports.help = {
    name:"meme",
    aliases: ["meme"]
}