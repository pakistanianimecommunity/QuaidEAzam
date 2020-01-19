const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_TOKEN = 'NjY4NDQ2NTA5MTU4ODkxNTIx.XiRfLw.WtLT3xdClrHGZiocFSMvQDyS9S8';

const PREFIX = '!';

var version = '1.0.1';

client.on('ready', () =>{
    console.log('This bot is online!')
})

client.on('guildMemberAdd', member=>{

    const channel = member.guild.channels.find(channel => channel.name === "chokidaar-ki-diary");
    if(!channel) return;

    channel.send(`Welcome to Pakistani Anime Community, ${member}, please read the rules in #rules`)
})

client.on('message', msg=>{
    if(msg.content === "Founders"){
        msg.reply('The Founders of Pakistani Anime Community are Pirate Hunter , ◢◤Aroparo◢◤ and SurgeonOfDeathYT');

    }
})

client.on('message', msg=>{
    if(msg.content === "Quote"){
        msg.reply('Quaid-e-Azam once said "No nation can ever rise to the height of glory, until their Women are side by side men"');

    }
})

client.on('message', msg=>{
    if(msg.content === "Pirate Hunter"){
        msg.reply('Pirate Hunter is the founder of Pakistani Anime Community');

    }
})
client.on('message', msg=>{
    if(msg.content === "Aroparo"){
        msg.reply('◢◤Aroparo◢◤ is the founder of Pakistani Anime Community');

    }
})
client.on('message', msg=>{
    if(msg.content === "Surgeon Of Death"){
        msg.reply('SurgeonOfDeathYT is the founder of Pakistani Anime Community');

    }
})
client.on('message', msg=>{
    if(msg.content === "Quote 2"){
        msg.reply('Elon Musk once said, "When something is important enough, you do it even if the odds are not in your favor"');

    }
})
client.on('message', msg=>{
    if(msg.content === "!help"){
        msg.reply('contact the administrators of the server !');
        
    }
})
client.on('message', msg=>{
    if(msg.content === "Pakistan"){
        msg.reply(':flag_pk: Pakistan Zindabad');
        
    }
})
client.login(process.env.BOT_TOKEN);
