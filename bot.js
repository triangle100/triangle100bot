let servername = "Economee Support"
let prefix = "++"
let botname = "Economee DEV"
let W_message = true
let Bot_A = "++help"
let Bot_Version = "v0.1.41"
let cooldown = 86400000
let Dcoins = 500
let wCooldown = 3600000
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
const ms = require('ms');
const fs = require('fs');
const dailyCooldown = new Set();
const coins = require("./coins.json")
const coinCooldown = new Set()
const job = require("./jobs.json")
const workCooldown = new Set();

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
  const attachment1 = new Attachment('./img/gradient1.png')
  const attachment2 = new Attachment('./img/favicon+.png')
  const attachment3 = new Attachment('./img/economee.png')

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

});

bot.login(process.env.TOKEN);
