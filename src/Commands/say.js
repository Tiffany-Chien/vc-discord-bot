const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "say",
  description: "Repeat what ask to say",
  async run(message, args, client) {
    message.reply(args.slice(1).join(" "));
  },
});
