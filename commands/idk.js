const { Message } = require("discord.js");

module.exports = {
    name: 'idk',
    description: 'you a bro?',
    execute(msg, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4282C6')
        .setTitle('Yeet')
        .setURL('https://youtube.com/zgamer100')
        .setDescription('please do not use this function')
        .addFields(
            {name: 'Rule 1', value: 'there are no rules'}
        )
        .setImage('https://weneedfun.com/wp-content/uploads/2017/05/Best-Dank-Memes-33.jpg')
        .setFooter('i found this');
        
        msg.channel.send(newEmbed);
    }

}