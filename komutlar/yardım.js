const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

   .setColor("#00e4ff")

  .setTitle('Wasten Sunucu Menüsü')

  .addField("• | w!anti-raid",`__Anti raid Açar__`)
  
  .addField("• | w!bot-izni",`__Botların anti raid İznini ayarlar__`)
  
  .addField("• | w!capsengel",`__Capslock kullanımını engeller.__`)

  .addField("• | w!emoji-koruma",`__Emojileri korur.__`)

  .addField("• | w!ever-engel",`__Everyone ve here yi engeller.__`)

  .addField("• | w!kanal-koruma",`__Kanal silinirse Geri Çeker.__`)

 
  .addField("• | w!küfür-engel",`__Küfürleri engeller__`)

  .addField("• | w!mod-log",`__Mod-Log kanalını belirler.__`)

  .addField("• | w!reklam-engel",`__reklamı engeller.__`)

  .addField("• | w!rol-koruma",`__Rolleri Korur.__`)

  .addField("• | w!sohbet-aç",`__Sohbetinizi açmaya yarar.__`)

  .addField("• | w!sohbet-kapat",`__Sohbetinizi kapatmaya yarar.__`)

  .addField("• | w!sil-üye",`__Belirtilen kişinin belirtilen miktarda mesajını siler.__`)

  .addField("• | w!sil",`__Belirlenen miktarda mesajı siler.__`)

  .addField("• | w!yavaş-mod",`__Sohbete yazma sınır (süre) ekler.__`)
     
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK