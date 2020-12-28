module.exports = {
    name: 'bro',
    description: 'you a bro?',
    execute(msg, args) {
        if(msg.member.roles.cache.has('518595922117132289')) {
            msg.reply('wassup bro?');
        } else{
            msg.reply("you ain't a bro, bro");
        }
    }
}