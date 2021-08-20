// TODO: clear console, comment out if we want
console.clear();

// import discord library

const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const config = require("./Data/config.json");

// Create a client(the bot)
const client = new Client();
const fs = require("fs"); // file system

fs.readdirSync("./src/Commands")
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`);
    console.log(`Command ${command.name} loaded`);
    client.commands.set(command.name, command);
  });

// event
client.on("ready", () => {
  console.log("Logged in as " + client.user.tag);
});

// message event
client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.content === "安安") {
    message.reply("安安你好幾歲住哪");
  }
  if (!message.content.startsWith("!")) {
    return;
  }
  const args = message.content.substring(config.prefix.length).split(/ +/); //any spaces follow by any spaces

  // TODO: Delete this and implement in another class
  switch (args[0].toLowerCase()) {
    case "hello":
      message.reply("Hello World!");
      break;

    case "說":
      message.reply(args.slice(1).join(""));
      break;
  }

  const command = client.commands.find((cmd) => cmd.name == args[0]);

  if (!command) {
    return message.reply(`${args[0]} is not a valid command.`);
  }

  command.run(message, args, client);
});

client.login(config.token);
