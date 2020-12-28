const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) {
        const args = msg.content.slice(prefix.length).split(/ +/);
        if(msg.content.toLowerCase().includes('hello there')) {
            console.log('hello there');
           client.commands.get('hellothere').execute(msg, args, Discord);
        } else if(msg.content.toLowerCase().includes('200000 units are ready')) {
            client.commands.get('troops').execute(msg, args);
        }else if(msg.content.toLowerCase().includes('sand')) {
            client.commands.get('sand').execute(msg, args);
        }
        return;
    }
    
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping') {
        client.commands.get('ping').execute(msg, args);
    } else if(command === 'bro') {
        client.commands.get('bro').execute(msg, args);
    } else if(command === 'idk') {
        client.commands.get('idk').execute(msg, args, Discord);
    } else if (command === 'server') {
        client.commands.get('server').execute(msg, args);
    }

});


client.login('NzkxMzM4MDcwNzkyMzM5NDc2.X-NtAg.ex4214Xa4KFrboUuLm9-tAgqBBY');