require('console-stamp')(console, '[HH:MM:ss]');
let prefix = "+"
let rank = "TEMP PERMS"
let botname = "triangle100bot"
let W_message = true
let Bot_A = "+help"
let Bot_Version = "v1.0.6"
const consolestamp = require('console-stamp')(console, '[HH:MM:ss.l]');
var date = new Date();  
var day = date.getDate()+1;  
var month = date.getMonth()+1;  
var year = date.getFullYear();
var today = new Date();  
var h = today.getHours();  
var m = today.getMinutes();  
var s = today.getSeconds();  
const {Client, Attachment} = require("discord.js");
const Discord = require("discord.js");
const client = new Client();
const member = new Client();
const cmd = new Client();
const message = new Client();
const bot = new Client({disableEveryone: false});
const chat = new Client();
const send = new Client();
const createdAt = new Client();
const footer = botname + " " + Bot_Version 

bot.on("ready", async () => {
  console.log(`${bot.user.username} Has started and loaded the commands! I am ready to go`)
  bot.user.setActivity(Bot_A);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = message.content.substring(prefix.length).split(" ");
  const attachment1 = new Attachment('./img/icon.png')

if (cmd === prefix + "profile"){
	let ProfileEmbed = new Discord.RichEmbed()
	.setTitle("Profile")
   .addField("Name", message.author, true)
   .addField("triangle100 rank", rank, true)
   .setTimestamp()
   .setColor('#0099ff')

	message.channel.send(ProfileEmbed)
}

if (cmd === prefix + "time"){	
	let TimeEmbed = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('#0099ff')

	message.channel.send(TimeEmbed)
}
	
if (cmd === prefix + "attachment"){	
	message.channel.send(message.author, attachment1)
}
	
if (cmd === prefix + "version"){	
	let VersionEmbed = new Discord.RichEmbed()
   .setTitle(Bot_Version)
   .setColor('#0099ff')

	message.channel.send(VersionEmbed)
}

if (cmd === prefix + "premium"){	
	message.channel.send("💎Support triangle100 and buy PREMIUM for extra commands and features!💎")
	message.channel.send("https://www.patreon.com/triangle100")
}

if (cmd === prefix + "help"){	
	let HelpEmbed = new Discord.RichEmbed()
   .setTitle('Help Menu - Commands')
   .setDescription("Prefix: `" + prefix + "`")
   .addField("General", "\n `help` (a list of useable commands)", false)
   .addField("Miscellaneous", "\n `version` (prints current build version) \n `attachment` (tests attachment status) \n `time` (prints current time) \n `premium` (💎extra perks!💎)", true)
   .setColor('#0099ff')
   .setTimestamp()
   .setFooter(footer);

	message.channel.send(HelpEmbed)
}

});
bot.login(process.env.TOKEN);
