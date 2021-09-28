const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async (client) => {
  let large = await rpc.getRpcImage(config.applicationid, config.imagename);
  let small = await rpc.getRpcImage(config.applicationid, config.small);
  let presence = new rpc.Rpc()
  .setName(config.name)
  .setUrl('https://www.twitch.tv/Nobuyak1')
  .setType(config.type)
  .setApplicationId(config.applicationid)
  .setAssetsLargeImage(large.id)
  .setAssetsSmallImage(small.id)
  .setAssetsLargeText(config.text)
  .setState(config.state)
  .setDetails(config.details)
  .setStartTimestamp(config.time || Date.now());

  client.user.setPresence(presence.toDiscord()).catch(console.error);
  console.log(chalk.hex("#800080")("Succesfully enabled rpc"))
}
