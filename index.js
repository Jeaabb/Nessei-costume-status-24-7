const discord = require("discord.js-selfbot-v11")
const fs = require("fs")

const client = new discord.Client()
const keepAlive = require('./server.js')
const config = require("./config.json")

const traits = fs.readdirSync("./traits/")
	traits.forEach(file => {
  		const traitname = file.split(".")[0]
  		const event = require(`./traits/${file}`);
  	client.on(traitname, event.bind(null,  client));
})

keepAlive();
client.login(process.env.token)