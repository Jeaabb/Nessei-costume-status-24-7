const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = (client) => {
	rpc.getRpcImage(config.applicationid, config.imagename)
	.then(large => {
 		let presence = new rpc.Rpc()
  		.setName(config.name)
  		.setUrl('https://www.twitch.tv/Nobuyak1')
   		.setType(config.type)
  		.setApplicationId(config.applicationid)
 		.setAssetsLargeImage(large.id)
 		.setAssetsSmallImage(config.small)
      	.setAssetsLargeText(config.text)
 		.setState(config.state)
 		.setDetails(config.details)
      	.setStartTimestamp(config.time || Date.now())
  client.user.setPresence(presence.toDiscord()).catch(console.error);   
	})
console.log(chalk.hex("#800080")("Succesfully enabled rpc"))
            }