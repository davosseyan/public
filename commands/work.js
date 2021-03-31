const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

    exports.run = async (client, message, args) => {
    let member = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${member.id}`)
    
    let timeout = 3 * 50000;
        
    if (author !== null && timeout - (Date.now() - author) > 10) {
        let time = ms(timeout - (Date.now() - author))
        
    const embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Economy`, client.user.avatarURL())
    .setDescription(`<a:atomic_ne:814817393686740992> | ${await client.translate(`You've already worked. Come back in \`${time.hours}h, ${time.minutes}m, and ${time.seconds}s\`.`, message)}`)
    .setColor(message.guild.me.displayHexColor)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed2)
        } else {
    
        let replies = [
        "Developer",
        "Pilot",
        "Doctor",
        "Officer",
        "Firefighter",
        "Pocket",
        "Shoemaker",
        "Manager",
        "Football Player",
        "Singer",
        "Comedian",
        "Pedicure",
        "Teacher",
        "Minister",
        "Security Guard",
        "Hairdresser",
        "Plumber",
        "Farmer",
        "Mechanic",
        "Provider",
        "Train driver",
        "Cigarette Seller",
        "Drug dealer",
        "Gardener",
        "Ceramist",
        "YouTuber",
        "Animal Keeper",
        "Private driver",
        "Keyboard mobster",
        "Leader",
        "Coach",
        "Cameraman",
        "Wizard",
        "Pisar",
        "Psychiatrist",
        "Varioc",
        "Tailor",
        "Operator",
        "Specialist",
        "Priest",
        "Hoxha",
        "Demon Exorcist",
        "Miner",
        "Forester",
        "Pharmacist",
        "Farmer",
        "Physiotherapist",
        "Tractor",
        "Accordionist",
        "Musician",
        "Veljko Kunic",
        "Toni Grgic",
        "Sanja Grospić",
        "Primarius Guzina",
        "Shemsudin Dino Poplava",
        "Notary",
        "Basketball player",
        "Volleyball",
        "Athlete",
        "Designer",
        "Baker",
        "Prisoner",
        "Lawyer",
        "Judge",
        "Traffic",
        "Inspector",
        "Chief of Police",
        "Negotiator",
        "Scientist",
        "FBI AGENT",
        "Santa Claus",
        "Christmas Bat",
        "Professional Gamer",
        "Odzacar",
        "Philosopher",
        "Astronaut",
        "Car Dealer",
        "Gynecologist",
        "Taxi driver",
        "Caterer",
        "Chef",
        "Butcher",
        "Conductor",
        "Customs officer",
        "Controller",
        "CIA AGENT",
        "Super Hero",
        "Superman",
        "Spiderman",
        "Forklift",
        "Pizza Master",
        "Helper",
        "Deputy Minister of Health",
        "Ljubica",
        "Script",
        "Professor",
        "Cook",
        "School principal",
        "Detective",
        "Auto mechanic",
        "EMERGENCY DRIVER",
        "Traffic",
        "Producer",
        "Director",
        "Postman",
        "Photographer",
        "Coach",
        "Goalkeeper",
        "Drummer",
        "Limousine Driver",
        "Security",
        "White goods seller",
        "Journalist",
        "Raw material collector",
        "Gold Seeker",
        "Silver Seeker",
        "Hospital Director",
        "Private",
        "Cook",
        "Waitress", 
        
        ];
    
        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 500) + 100;

        db.add(`invcash_${message.guild.id}_${member.id}`, amount)
        db.set(`work_${message.guild.id}_${member.id}`, Date.now())

        const embed1 = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} - Work`, client.user.avatarURL())
        .setDescription(`<a:atomic_coin:817782205753065502> | ${await client.translate(`You worked like: **${replies[result]}**\n<a:atomic_coin:817782205753065502> | You earned: \`${amount}$\`.`, message)}`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed1);
        
        };
    }
    module.exports.help = {
        name:"work",
        aliases: ["working"]
    }