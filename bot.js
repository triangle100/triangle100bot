require('console-stamp')(console, '[HH:MM:ss]');
let prefix = "+"
let rank = "TEMP PERMS"
let botname = "triangle100bot"
let W_message = true
let Bot_A = "+help"
let Bot_Version = "v1.0.0"
const consolestamp = require('console-stamp')(console, '[HH:MM:ss.l]');
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
   .addField("Economee rank", rank, true)
   .setTimestamp()
   .setColor('#d53e3e')

	message.channel.send(ProfileEmbed)
}

if (cmd === prefix + "time"){	
	let TimeEmbed = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('#d53e3e')

	message.channel.send(TimeEmbed)
}
	
if (cmd === prefix + "attachment"){	
	message.channel.send(message.author, attachment1)
}
	
if (cmd === prefix + "version"){	
	let VersionEmbed = new Discord.RichEmbed()
   .setTitle(Bot_Version)
   .setColor('#d53e3e')

	message.channel.send(VersionEmbed)
}

if (cmd === prefix + "help"){	
	let HelpEmbed = new Discord.RichEmbed()
   .setTitle('Help Menu - Commands')
   .setDescription("Prefix: `" + prefix + "`")
   .addField("General", "\n `help` (a list of commands) \n `wallet` (shows your current wealth) \n `work` (work for your job) \n `jobs` (a list of the jobs you can apply for) \n `slots` (use the slots machine) \n `daily` (claim your daily reward)", false)
   .addField("Miscellaneous", "\n `version` (prints current build version) \n `attachment` (tests attachment status) \n `time` (prints current time) \n `premium` (💎extra perks!💎)", true)
   .setColor('#d53e3e')
   .setTimestamp()
   .setFooter(footer);

	message.channel.send(HelpEmbed)
}

if (cmd === prefix + "premium"){	
	message.channel.send("💎Support triangle100 and buy PREMIUM for extra commands and features!💎")
	message.channel.send("https://www.patreon.com/economee")
}
});

bot.login(process.env.TOKEN);
