const Discord = require('discord.js')

const Canvas = require('canvas');

exports.run = async (client, message, args) => {

        const user = message.mentions.users.first() || message.client.users.cache.get(args[0]);
        const user2 = message.author;
          
        if(!user) {
            const mention = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} - Ship`, client.user.avatarURL())
            .setDescription('<:atomic_njet:814803975798521866> | You did not mention anyone.')
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(mention)
        }
          
        if(user){

        const messagewait = await message.channel.send('***Loading, please wait...***');
      
        const canvas = Canvas.createCanvas(500,200);
        const ctx = canvas.getContext("2d");
      
        const background = await Canvas.loadImage("https://www.designsmag.com/wp-content/uploads/2017/05/cool-galaxy-wallpaper-007.jpg")
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
        const srce = await Canvas.loadImage("https://cdn.discordapp.com/attachments/766056182401204224/766823746865856572/Webp.net-resizeimage.png")
        ctx.drawImage(srce, 178, 30, 150, 150);
      
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
            
        ctx.fillStyle = '#FFFFFF'
        var size1 = 40;
            
        const love = Math.round(Math.random() * 100) + "%";
        do{
          ctx.font = `${size1 -= 5}px sans-serif`;
        }while (ctx.measureText(love).width > canvas.width - 225);
      
        ctx.fillText(love, 223, 115)
      
        const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({format : "png"}));
        const avatar = await Canvas.loadImage(user.displayAvatarURL({format : "png"}));

        ctx.drawImage(avatar2, 25, 25, 150, 150)
            
        ctx.drawImage(avatar, 335, 25, 150, 150)   
      
        const final = new Discord.MessageAttachment(canvas.toBuffer(), "ship.png")
      
        messagewait.delete().catch(err => {
            console.log('Ship Command\nMessage Already Deleted')
        });

        await message.channel.send(final)
        
        }

    }
module.exports.help = {
    name:"ship",
    aliases: ["shiprate"]
  }