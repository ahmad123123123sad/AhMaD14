const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "496762158000898049"; 
var channel = "516330973172989963";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** احمد عمك يا ورعاحمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع **')
    },305);
})








client.login(process.env.BOT_TOKEN);
