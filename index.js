const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const DisTube = require('distube')
const translate = require('@iamtraction/google-translate')
const db = require('quick.db')

const WOKCommands = require('wokcommands')

const guildId = '814930500053237770'

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: 'slash',
    testServers: [guildId],
    showWarns: false,
  })
})


client.translate = async(text, message) => {
    const lang = await db.has(`lang_${message.guild.id}`) ? await db.get(`lang_${message.guild.id}`) : 'en';
    const translated = await translate(text, {from: 'en', to: lang});
    return translated.text;
}

client.snipes = new Map()

client.on('ready', async() => {

    console.log(`${client.user.tag} is Davos. | ${client.guilds.cache.size} guilds.`);

    client.user.setActivity(`@${client.user.username} | ${client.guilds.cache.size} guilds`, ({ type: "WATCHING" })).catch(console.error)
});

const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "None"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "None"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> [${song.name} - ${song.formattedDuration}](${song.url})\n> ${status(queue)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)
        
    })
	.on("addSong", (message, queue, song) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_zapisnik:821641399555325963> | Added [${song.name}](${song.url}) to queue.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)
    })

    .on("empty", message => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Music`, client.user.avatarURL())
        .setDescription(`> <:lightning_zapisnik:821641399555325963> | **Channel is empty**, leaving the channel.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)
        
    })

    .on("error", (message, err) => {
        const channel = client.channels.cache.get('823834575305703465')

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
        .setDescription(`\`\`\`js\n${err}\`\`\``)
        .setThumbnail(client.user.avatarURL())
        .addField('Error occured in', `Server: ${message.guild.name || 'Not available'}\nID: ${message.guild.id || 'Not available'}`, true)
        .addField('Server Owner ID:', `${message.guild.ownerID || 'Not available'}`, true)
        .setColor('RED')
        .setTimestamp()
        channel.send(embed)

    })

// -------------------------------------- Command Handler -------------------------------------- //
client.commands = new Discord.Collection();
    fs.readdir("./commands/", (err, files) => {
      if (err) console.error(err);
      let jsfiles = files.filter(f => f.split(".").pop() === "js");
    
      if (jsfiles.length <= 0) return console.log("There are no commands to load...");
    
      jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
      });
    });
    
    
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.queue = new Map();

    module.exports = client;


client.on('message', async message => {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni
    
    if (message.channel.type === "dm") return;
    
    const args = message.content.slice(PREFIX.length).split(/ +/)
    const cmd = args.shift().toLowerCase();
    
    let command;
    
    if (!message.content.toLowerCase().startsWith(PREFIX) || message.author.bot) return;
            
    if (client.commands.has(cmd)) {
        command = client.commands.get(cmd);

    } else {
        command = client.commands.get(client.aliases.get(cmd));
    }
    
    if (command) command.run(client, message, args);

});
// --------------------------------------------------------------------------------------------- //

client.on('message', async function(message) {

    if(message.author.bot) return;

    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {

        const removed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - AFK`, client.user.avatarURL())
        .setDescription(`<a:vp_ann:814395137945239552> | I removed your \`afk\` status.`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(removed)

        message.member.setNickname(`${message.author.username}`).catch(err => {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - AFK`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> I didnt set your nickname, there was some error!')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
      
          });

          await db.delete(`afk-${message.author.id}+${message.guild.id}`)
    }

    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {

            const embednew = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - AFK`, client.user.avatarURL())
            .setDescription(`<:atomic_afk:815246594034892819> | **${message.mentions.members.first().user.tag}** is currently \`AFK\` please do not ping him.`)
            .addField('<a:vp_ann:814395137945239552> | AFK Reason', `\`${db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)}\``)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embednew)

        } else return;
    } else;
 
 })

 client.on('message', async function(message) {

    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || config.prefixNormalni

    if(message.author.bot) return;

    if(message.content === "<@!808336313681575986>" || message.content ==="<@808336313681575986>") {

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Server Prefix`, client.user.avatarURL())
        .setDescription(`<a:vp_ann:814395137945239552> | Prefix for **${client.user.username}** bot is **${PREFIX}**!\n<:atomic_sokic:813021123586424862> | Check **list of commands** by typing **${PREFIX}help**!\n<:atomic_yep:814804851942359050> | Join bot **support** server **[here](https://discord.gg/HWSAWu5QHu)**.\n<a:vp_ann:814395137945239552> | Invite bot **[here](https://discord.com/api/oauth2/authorize?client_id=808336313681575986&permissions=8&scope=bot)**.`)
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        message.channel.send(embed)
   }
 
 })

 client.on('messageDelete', async message => {

    if(message.author.bot) return;
    client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      member: message.member,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })

 })

 client.on('message', async message => {

    if(!db.get(`leveling_${message.guild.id}`)) return;
    
    if(db.get(`leveling_${message.guild.id}`)) {

        if(message.author.bot) return;

        db.add(`xp_${message.guild.id}_${message.author.id}`, 5)

        let ifxp = db.fetch(`xp_${message.guild.id}_${message.author.id}`)
        let level = db.fetch(`level_${message.guild.id}_${message.author.id}`)
      
        if(ifxp + 5 > 300){

            db.add(`level_${message.guild.id}_${message.author.id}`, 1)
            db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
      
            let levelingroom = db.get(`leveling_${message.guild.id}`)
            if(levelingroom) {
                let channel = message.guild.channels.cache.get(levelingroom)
    
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username} - Leveling`, client.user.avatarURL())
                .addField('LEVEL UP', `> <a:atomic_giveaway:818442497616379954> | Congratulations ${message.author}, you advenced to level **${level + 1}**`)
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                channel.send(embed)
            }
        }

    }

 });

 client.on('guildCreate', (guild, message) => {
    
    const serverLog = client.channels.cache.get('814931750659948607');

    var embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - New Server`)
    .setDescription(`
    ${config.strelica} | **${client.user.username}** is added on **${guild.name}**!

    \n<:atomic_event:818442553639567395> | **${guild.name}** has **${guild.memberCount}** members.

    \n<a:pikachucool:814953537569947699> | That guild **ID** is: \`[ ${guild.id} ]\`.`)
    .setColor('GREEN')
    .setThumbnail(guild.iconURL({ dynamic:true, size:2048 }))
    .setTimestamp()
    .setFooter(`${client.guilds.cache.size} servers`, client.user.avatarURL())
    serverLog.send(embed)
})

client.login(config.token);

process.on('unhandledRejection', error => {
    const channel = client.channels.cache.get('823834575305703465')

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Errors`, client.user.avatarURL())
    .setDescription(`\`\`\`js\n${TypeError(error)}\`\`\``)
    .setThumbnail(client.user.avatarURL())
    .addField('Error occured in', `Server: Not available\nID: Not available`, true)
    .addField('Server Owner ID:', 'Not available', true)
    .setColor('RED')
    .setTimestamp()
    channel.send(embed)
  })
