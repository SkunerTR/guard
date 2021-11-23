const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#ffd500')
      .setTitle('Soulfy Roleplay V2')
      .setDescription('Sunucumuz Bakımdadır.')
        .addField('Sunucumuzda Küçük Bi Arzadan Dolayı Bakıma Aldık Lütken ``Akti`` Geçilmeden Sunucuya Girmeyiniz')
        .addField('Sunucu İp', 'connect 213.142.148.177', true)
        .addField('TS3 İp ', '195.85.205.106:10000', true)
        .setImage('https://cdn.discordapp.com/attachments/435428290862514176/912830606629539950/Slogo.png')
        .setTimestamp()
        .setFooter('Soulfy Roleplay V2')
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ip'
}
