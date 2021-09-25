const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';
const fs = require('fs');
const { EventEmitter } = require('stream');

let queue = [];
let dispatcherQueue =[];
let first = true;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if(!msg.content.startsWith('!')) return;
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
    
    const args = msg.content;
    const command = args.toLowerCase();

    if(command === '!ping') {
        client.commands.get('ping').execute(msg, args);
    } else if(command === '!bro') {
        client.commands.get('!bro').execute(msg, args);
    } else if(command === '!idk') {
        client.commands.get('idk').execute(msg, args, Discord);
    } else if (command === '!server') {
        client.commands.get('server').execute(msg, args);
    } 
    if (command.charAt(1) === 'p') {
        // Join the same voice channel of the author of the message
        if (msg.member.voice.channel) {
           

            const connection = await msg.member.voice.channel.join().catch(err => console.log(err));
            // Play audio, see below
            connection.setMaxListeners(1);
            console.log(command)
            if(command === '!p para') {

                queue.push('para.mp3');
            } else if(command === '!p mask') {
                queue.push('mask.mp3');
            } else if(command === '!p chug') {
               queue.push('chug.mp3');
            } else if(command === '!p road') {
                queue.push('road.mp3');
            } else if(command === '!p bruh') {
                queue.push('bruh.mp3')
            } else if(command === '!p obam') {
                queue.push('obam.mp3');
            }
            if(queue[0] != null && queue.length < 2) {
                console.log("hello")
                
                play(queue[0], connection);
                
                
                
    
            }
            
            
            // Always remember to handle errors 

         }
    }
    


});

function play(song, connection) {
    let dispatcher = connection.play(song);
    dispatcher.on('start', () => {
         console.log('audio.mp3 is now playing!');
    });
    dispatcher.on('finish', () => {
        console.log(queue)
        queue.shift();
        
        dispatcherQueue.shift()
        console.log("shifting")
        if(queue[0]) dispatcher = play(queue[0], connection);
        console.log('audio.mp3 has finished playing!');
    });
    dispatcher.on('error', console.error);

    return dispatcher;
    
                
}


client.login('');