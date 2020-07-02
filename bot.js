require('console-stamp')(console, '[HH:MM:ss]');
let servername = "Economee Support"
let prefix = "eea!"
let botname = "Economee"
let W_message = true
let Bot_A = "eea!help"
let Bot_Version = "v0.2.0.2"
let cooldown = 86400000
let Dcoins = 500
let wCooldown = 3600000
const consolestamp = require('console-stamp')(console, '[HH:MM:ss.l]');
const Discord = require("discord.js");
const client = new Discord.Client();
const member = new Discord.Client();
const cmd = new Discord.Client();
const message = new Discord.Client();
const bot = new Discord.Client({disableEveryone: false});
const chat = new Discord.Client();
const send = new Discord.Client();
const createdAt = new Discord.Client();
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
  let args = message.content.split(' ');


if (cmd === prefix + "help"){	
	let HelpEmbed = new Discord.RichEmbed()
   .setTitle('Help Menu - Commands')
   .setDescription('\n `ee!help` (a list of commands) \n `ee!wallet` (shows your current wealth) \n `ee!work` (work for your job) \n `ee!jobs` (a list of the jobs you can apply for) \n `ee!slots` (use the slots machine) \n `ee!daily` (claim your daily reward) \n `ee!premium` (support Economee)')
   .setColor('#0099ff')
   .setTimestamp()
   .setFooter(footer);

	message.channel.send(HelpEmbed)
}

if (cmd === prefix + "premium"){	
	message.channel.send("💎Support Economee and buy PREMIUM for extra commands and features!💎")
	message.channel.send("https://www.patreon.com/economee")
}

//Work
if (cmd === prefix + "work"){
	    let uJob = job[message.author.id].job
		if (workCooldown.has(message.author.id)) {
            message.channel.send(":no_entry: You have already completed your hourly shift, come back later to continue working");
    }
	else {
	if (uJob === "programmer"){
        let totalAmt = Math.floor(Math.random() * (860 - 550)) + 550
	    let totalEmbed = new Discord.RichEmbed()
	    .setFooter(footer)
	    .setTitle("Pay Check!")
		.setColor('#0099ff')
		.addField("Job:", uJob)
	    .addField("You finished some work and got paid!", "Paycheck: " + totalAmt)
	    message.channel.send(totalEmbed)
		coins[message.author.id] = {
        coins: coins[message.author.id].coins + totalAmt
		}
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
		});;
        workCooldown.add(message.author.id);
        setTimeout(() => {
         workCooldown.delete(message.author.id);
        }, wCooldown);
		return
    }
	if (uJob === "ssworker"){
	    let totalAmt = Math.floor(Math.random() * (220 - 90)) + 90
	    let totalEmbed = new Discord.RichEmbed()
	    .setFooter(footer)
	    .setTitle("Pay Check!")
		.setColor('#0099ff')
		.addField("Job:", uJob)
	    .addField("You finished some work and got paid!", "Paycheck: " + totalAmt)
	    message.channel.send(totalEmbed)
		coins[message.author.id] = {
        coins: coins[message.author.id].coins + totalAmt
		}
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
		});;
        workCooldown.add(message.author.id);
        setTimeout(() => {
         workCooldown.delete(message.author.id);
        }, wCooldown);
		return	
	}
    if (uJob === "mechanic"){
		let totalAmt = Math.floor(Math.random() * (300 - 110)) + 110
	    let totalEmbed = new Discord.RichEmbed()
	    .setFooter(footer)
	    .setTitle("Pay Check!")
		.setColor('#0099ff')
		.addField("Job:", uJob)
	    .addField("You finished some work and got paid!", "Paycheck: " + totalAmt)
	    message.channel.send(totalEmbed)
		coins[message.author.id] = {
        coins: coins[message.author.id].coins + totalAmt
		}
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
		});;
        workCooldown.add(message.author.id);
        setTimeout(() => {
         workCooldown.delete(message.author.id);
        }, wCooldown);
		return
	}
	
	
	
	
	message.channel.send(":no_entry: It seems that you don't have a job; Get one by doing !jobs")
}
}  
  
  
//Daily reward 
if (cmd === prefix + "daily"){
	if (!coins[message.author.id]){
       coins[message.author.id] = {
       coins: 0
    }
 }   
	if (dailyCooldown.has(message.author.id)) {
            message.channel.send("You can't claim your daily reward just yet - " + message.author);
			console.log(message.author.username + " Just tried to get their daily cooldown early.")
    }
	else {
		coins[message.author.id] = {
        coins: coins[message.author.id].coins + Dcoins
    };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });
		var date = new Date();
       	let uCoin = coins[message.author.id].coins
        message.channel.send('You have claimed your daily $500 :moneybag:! You now have ' + uCoin + " coins")
		console.log(message.author.username + " Just claimed there daily reward")
        dailyCooldown.add(message.author.id);
        setTimeout(() => {
          dailyCooldown.delete(message.author.id);
        }, cooldown);
    }
}

//Jobs
if (cmd === prefix + "jobs"){
	if (!job[message.author.id]){
    job[message.author.id] = {
    job: 0
   }
  }
	let jobsA = new Discord.RichEmbed()
	.setFooter(footer)
	.setTitle("Choose a job! Reply with name of the job!")
	.setColor('#0099ff')
	.addField("**Jobs Available**", "`Cashier` \n `Assistant` \n `Programmer`")
	message.channel.send(jobsA)
	const response1 = await message.channel.awaitMessages(msg => msg.author === message.author, { time: 30000, max: 1, errors: ['time'] }).catch(error => message.channel.send('You took too long to choose.'))
    //Cashier
	if (response1.first().content.toLowerCase() === "cashier"){
		if(!job[message.author.id].job){
		message.channel.send("You have been hired as a cashier")
        job[message.author.id] = {
        job: job[message.author.id].job = "cashier"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
	message.channel.send("You have quit your old job and now you're working as a cashier")
        job[message.author.id] = {
        job: job[message.author.id].job = "cashier"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
    //Assistant
	if (response1.first().content.toLowerCase() === "assistant"){
		if(!job[message.author.id].job){
		message.channel.send("You have been hired as an assistant")
        job[message.author.id] = {
        job: job[message.author.id].job = "assistant"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
	message.channel.send("You have quit your old job and now you're working as an assistant")
        job[message.author.id] = {
        job: job[message.author.id].job = "assistant"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
	//Programmer
	if (response1.first().content.toLowerCase() === "programmer"){
		if(!job[message.author.id].job){
		message.channel.send("Congratulations! You've been hired to work at discord HQ; What an amazing job to have!")
        job[message.author.id] = {
        job: job[message.author.id].job = "programmer"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
	message.channel.send("You've been hired to work at discord!")
        job[message.author.id] = {
        job: job[message.author.id].job = "programmer"
    };
       return fs.writeFile("./jobs.json", JSON.stringify(job), (err) => {
		   return
    });
	}
	
}

//Slots
if (cmd === prefix + "slots"){
	    let uCoins = coins[message.author.id].coins
		if (uCoins < 200){
			return message.channel.send("You don't have enough money to use the slots machine.")
		}
	    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
        let result1 = Math.floor((Math.random() * slots.length));
        let result2 = Math.floor((Math.random() * slots.length));
        let result3 = Math.floor((Math.random() * slots.length));
        let name = message.author.displayName;
        let aicon = message.author.displayAvatarURL;

        if (slots[result1] === slots[result2] && slots[result3]) {
            let wEmbed = new Discord.RichEmbed()
                .setFooter("You Won! + 500 Coins", aicon)
                .setTitle(`:slot_machine: Slots :slot_machine:`)
                .addField(`Result:`, slots[result1] + slots[result2] + slots[result3], true)
                .setColor("#0099ff");
		coins[message.author.id] = {
        coins: coins[message.author.id].coins + 500
    };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });
            message.channel.send(wEmbed);
        } else {
            let embed = new Discord.RichEmbed()
                .setFooter(`You Lost! - 200 coins`, aicon)
                .setTitle(`:slot_machine: Slots :slot_machine:`)
                .addField(`Result`, slots[result1] + slots[result2] + slots[result3], true)
                .setColor("#0099ff");
		coins[message.author.id] = {
        coins: coins[message.author.id].coins - 50
    };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });
            message.channel.send(embed);
        }
}
 //Wallet 
if (cmd === prefix + "wallet"){
	if(!coins[message.author.id]){
	coins[message.author.id] = {
	   coins: 0

	};
	}
	let uCoins = coins[message.author.id].coins;
	let uCoinsEmbed = new Discord.RichEmbed()
   .addField(message.author.username + "'s Wallet",`${uCoins} Coins`)
   .setColor('#0099ff')
   .setTimestamp()
   .setFooter(footer);

	message.channel.send(uCoinsEmbed)
	}  
  
  
  
if (!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  }
}

let coinAmt = Math.floor(Math.random() * 1) + 1;
let baseAmt = Math.floor(Math.random() * 1) + 1;
   if (coinCooldown.has(message.author.id)) {
	   return
    } else {

    if(coinAmt === baseAmt){
    coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
    });

        coinCooldown.add(message.author.id);
        setTimeout(() => {
          coinCooldown.delete(message.author.id);
        }, 10000);
    }};

});

bot.login(process.env.TOKEN);