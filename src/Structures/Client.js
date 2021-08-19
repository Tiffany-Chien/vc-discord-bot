const Discord = require("discord.js");

const Command = require("./Command.js");

const intents = new Discord.Intents(32767); // put all of the intents

class Client extends Discord.Client {
  constructor(options) {
    super({ intents });

    /**
     * @type {Discord.Collection<String, Command>}
     */
    this.commands = new Discord.Collection();
    
  }
}

module.exports = Client;