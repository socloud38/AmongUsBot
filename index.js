const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzU5MDY1NjM2ODQ0MDc3MDg3.X24E9g.ZLiSm3Xkle9Lu8LAubHYlr333ho';
const prefix = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    var TailleMembres = client.users.cache.size;
    var TailleServeurs = client.guilds.cache.size;
    client.user.setActivity("Connecté - " + TailleServeurs + " serveur(s) et " + TailleMembres + " membre(s)");
});

client.on('message', msg => {
    if (msg.content === `${prefix}amongtag`) {
        let role = msg.guild.roles.cache.get('766370186747576370');

        if(!msg.member.roles.cache.has('766370186747576370')) {
            msg.member.roles.add(role);
            msg.reply(`Role ${role.name} Ajouté`);
        }
        else {
            msg.member.roles.remove(role);
            msg.reply(`Role ${role.name} Retiré`);
        }
    }
    else if (msg.content === `${prefix}deco`) {
        msg.reply(`Ciao!`);
        client.destroy();
    }
});

client.login(token);