client.functions.add({
    name: "admin",
    params: ["guild", "user"],
    code: `
    $return[$hasPerms[$env[guild];$env[user];Administrator]]
    `
});