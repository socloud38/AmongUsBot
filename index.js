const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "among-";
const commands = {
    "tag": "vous ajoute le role AmongUsPlayeur",
    "maps": "ajoute une images de toutes les maps sur le channel",
};
const maps = ["map1","map2","map3"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    var TailleMembres = client.users.cache.size;
    var TailleServeurs = client.guilds.cache.size;
    client.user.setActivity("Connecté - " + TailleServeurs + " serveur(s) et " + TailleMembres + " membre(s)");
});

client.on('message', msg => {
    if (msg.content === `${prefix}tag`) {
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
    else if (msg.content === `${prefix}map1` || msg.content === `${prefix}map2` || msg.content === `${prefix}map3`) {
        msg.reply("maps:", {files: [
                `./maps_images/${msg.content}.jpg`,]})
    }
    else if (msg.content === `${prefix}help`) {
        for(const command in commands) {
            msg.reply(command);
        }
    }
});

client.login(process.env.BOT_TOKEN);