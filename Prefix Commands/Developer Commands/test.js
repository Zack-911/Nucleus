module.exports = [{
    name: "test",
    type: "messageCreate",
    code: `
    $isAdmin[$guildID;$authorID]
    `
    },
]