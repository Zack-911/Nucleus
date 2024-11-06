module.exports = [{
    name: "Work",
    type: "messageCreate",
    aliases: ["Earn", "work", "earn"],  
    code: `
    $ifx[
        $c[=======================================================================]
        $if[$getVar[$authorID;CurrentJob]==Fast Food Worker]
        $let[$math[$getVar[$authorID;caps]+1000]]
        $color[008000]
        $title[Fast Food Worker]
        $description[You worked as a fast food worker and earned 1000 Caps]
        $c[=======================================================================]
        $else[...]
        $c[=======================================================================]
        $elseif[...]
        $c[=======================================================================]
        ]
    `
}]