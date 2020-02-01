const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix,token} = require('./config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message  => {
    if (!message.guild) return;
    if (message.content === `${prefix}join`) {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              message.reply('I have successfully connected to the channel!');
              const dispatcher = connection.playFile('C:/Users/crist/vscode/Emilia-tan/RZED.mp3');
            })
            .catch(console.log);
        } else {
          message.reply('You need to join a voice channel first!');
        }
      }
    if (message.content === `${prefix}leave`) {
        if (message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else {
            message.reply('I must be in a voice channel to be banished!');
        }
    }
    if (message.content === `${prefix}ping`) {
        message.reply('Pong')
    }
    if (message.content === `${prefix}pong`) {
        message.reply('Ping')
    }
    if (message.content === `${prefix}martes`) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.channel.send('-p ya es martes');
              })
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }
});

client.login(token);