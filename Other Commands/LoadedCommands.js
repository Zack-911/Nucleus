// Importing chalk
const chalk = require('chalk');

module.exports = {
    type: "ready",
    code: `
    $$djsEval[
        setTimeout(() => {
            const commands = ctx.client.commands; // Access the commands from the client

            console.log(chalk.blue('Commands Loaded')); // Change color of "Commands Loaded"

            // Check if commands is a valid Collection
            if (commands && typeof commands === 'object' && commands.size !== undefined) {
                // Iterate over each command group
                commands.forEach((cmdArray, commandName) => {
                    cmdArray.forEach(cmd => {
                        // Safely handle undefined or unexpected properties
                        const sourceFile = cmd.file || 'Unknown'; // Fallback to 'Unknown' if cmd.file is not defined
                        console.log(chalk.green(\`Loaded [\${commandName}] From [\${sourceFile}]\`)); // Log loaded command info in green
                    });
                });
            } else {
                console.log(chalk.red('No commands found or commands is not a valid Collection')); // Log error message in red
            }
        }, 5000); // Delay for 5 seconds to ensure commands are loaded
    ]
    `
};
