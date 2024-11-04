const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const chalk = require('chalk'); // Importing chalk for colored console output
const dotenv = require('dotenv'); // Importing dotenv for environment variable management
const figlet = require('figlet'); // Importing figlet for ASCII art generation

// Load environment variables from .env file
dotenv.config();

// Function to display ASCII art for the bot name
const displayAsciiArt = () => {
    figlet.text('Nucleus', { font: 'ANSI Shadow' }, (err, data) => {
        if (err) {
            console.error(chalk.red('Something went wrong with figlet...'));
            console.dir(err);
            return;
        }

        // Create a border of the same length as the longest line in the ASCII art
        const borderLength = data.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
        const border = '='.repeat(borderLength);

        console.log(chalk.cyan(border)); // Print top border in cyan
        console.log(chalk.green(data));  // Display the ASCII art in green
        console.log(chalk.cyan(border)); // Print bottom border in cyan
        console.log(chalk.white('Fully Open Source Discord Bot Made In An Easy To Learn Language\n')); // Subtitle
    });
};


// Client initialization
const client = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildMessages",
        "DirectMessages",
        "MessageContent",
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "GuildEmojisAndStickers",
        "GuildScheduledEvents",
        "GuildInvites",
        "GuildMessageReactions",
        "DirectMessageReactions",
        "GuildPresences",
        "GuildMessageTyping",
        "DirectMessageTyping",
        "GuildVoiceStates"
    ],
    prefixes: [
        "!",
        "$getGuildVar[GuildPrefix;$guildID;?]"
    ],
    events: [
        "ready",
        "messageCreate",
        "interactionCreate",
        // Add other relevant events here...
    ],
    extensions: [
        new ForgeDB() // Initialize ForgeDB extension
    ]
});

// Setup ForgeDB variables
const setupVariables = () => {
    ForgeDB.variables({
        cash: "0"
    });
    console.log(chalk.magentaBright("==================================================================="));
    console.log(chalk.yellow("Defined ForgeDB variables Successfully."));
    console.log(chalk.magentaBright("==================================================================="));
};

// Function to load commands and handle errors
const loadCommands = async () => {
    console.log(chalk.magentaBright("==================================================================="));
    console.log(chalk.blue("Loading commands..."));

    const commandGroups = ["./Prefix Commands", "./Other Commands"];
    
    for (const group of commandGroups) {
        try {
            await client.commands.load(group);
            console.log(chalk.green(`Successfully loaded ${group}.`));
        } catch (error) {
            console.error(chalk.red(`Failed to load ${group}:`), error);
        }
    }

    console.log(chalk.blue("All commands loaded successfully."));
    console.log(chalk.magentaBright("==================================================================="));
};

// Clear the terminal and log in the bot
const startBot = async () => {
    console.clear(); // Clear terminal screen
    

    // Display ASCII art
    displayAsciiArt();

    // Set up ForgeDB variables
    setupVariables();

    await loadCommands();
    console.log(chalk.cyanBright("==================================================================="));
    console.log(chalk.cyanBright("Made By Zack-911"))
    console.log(chalk.cyanBright("==================================================================="));
    try {
        await client.login(process.env.BOT_TOKEN); // Use environment variable for the bot token
        console.log(chalk.green("Bot logged in successfully."));
    } catch (error) {
        console.error(chalk.red("Failed to log in:"), error);
    }
    console.log(chalk.cyanBright("==================================================================="));
};

// Start the bot
startBot();
