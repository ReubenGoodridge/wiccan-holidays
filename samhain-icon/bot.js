console.log('Starting up...')

require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const command = require('./command')
client.login(process.env.BOTTOKEN)

client.on('ready', online)
function online () {
  console.log('Connection established')

  command(client, 'ping', message => {
    message.channel.send('Pong! 🏓')
  })

  command(client, 'servers', message => {
    client.guilds.cache.forEach((guild) => {
      console.log(guild)
      message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
    })
  })

  command(client, ['cc', 'clearchannel'], message => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then(results => {
        message.channel.bulkDelete(results)
      })
    }
  })

  command(client, 'status', message => {
    const content = message.content.replace('!status ', '')

    client.user.setPresence({
      activity: {
        name: content,
        type: 0
      }
    })
  })
}
