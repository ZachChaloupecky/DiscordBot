module.exports = {
    name: 'server',
    description: "General Kenobi!",
    execute(msg, args) {
      msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);

    }
}