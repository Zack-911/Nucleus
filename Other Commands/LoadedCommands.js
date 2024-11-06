// Importing chalk
const chalk = require('chalk');

module.exports = {
    type: "ready",
    code: `
    $djsEval[
        setTimeout(() => {
            const commands = ctx.client.commands.commands;
        
            console.log('Commands Loaded:');
        
            // Check if commands is a Collection or an object
            if (commands && typeof commands === 'object' && commands.size > 0) {
                // Iterate through the commands
                commands.forEach((cmdArray, commandName) => {
                    if (Array.isArray(cmdArray)) {
                        cmdArray.forEach(cmd => {
                            console.log(\`Loaded [\${commandName}\\] From [\${cmd.file || 'Unknown'}\\]\`);
                        });
                    } else {
                        console.log(\`[\${commandName}\\] is not an array\`);
                    }
                });
            } else {
                console.log('No commands found or commands is not a valid Collection.');
            }
        }, 5000); // Delay for 5 seconds to ensure commands are loaded       
    ]        
    `
};