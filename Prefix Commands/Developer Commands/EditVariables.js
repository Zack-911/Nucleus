module.exports = [{
        name: "Variable",
        aliases: ["EV", "EditVariable", "SetVariable", "SetVar", "EditVar", "SetVar", "variable", "ev", "editvariable", "setvariable", "setvar", "editvar", "setvar"],
        type: "messageCreate",
        code: `
            $onlyIf[$authorID==$botOwnerID;You are not the bot owner!]
            $title[Variable Editor]
            $description[This Feature Should Be Used Carefully
            Select The Action You Want To Use Below]
            $color[FFFFFA]
            $addActionRow
            $addButton[EditVar;Edit Variable;Primary]
            $addButton[GetVar;Get Variable;Success]
            $addButton[DeleteVar;Delete Variable;Danger]
        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["button"],
        code: `
            $onlyIf[$customID==EditVar;]
            $onlyIf[$authorID==$botOwnerID;$interactionReply[$ephemeral You cannot use these buttons.They are reserved for the bot owner]]
            $modal[EditVarModal;Variable Edit Menu]
            $addTextInput[VarName;The Variable Name;Short;true]
            $addTextInput[VarID;The Variable ID;Short;true]
            $addTextInput[NewValue;The New Value;Paragraph;true]
            
        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["modal"],
        code: `
            $onlyIf[$customID==EditVarModal;]
            $setVar[$input[VarName];$input[VarID];$input[NewValue]]
            $interactionReply[Edited Variable: $input[VarName] ID: $input[VarID] To: $input[NewValue] successfully
            $ephemeral
            ]

        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["button"],
        code: `
            $onlyIf[$customID==GetVar;]
            $onlyIf[$authorID==$botOwnerID;$interactionReply[$ephemeral You cannot use these buttons.They are reserved for the bot owner]]
            $modal[GetVarModal;Get Variable Menu]
            $addTextInput[VarName;The Variable Name;Short;true]
            $addTextInput[VarID;The Variable ID;Short;true]
            
        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["modal"],
        code: `
            $onlyIf[$customID==GetVarModal;]
            $interactionReply[Fetched Variable: $input[VarName] ID: $input[VarID] Result: $getVar[$input[VarName];$input[VarID]]]
            $ephemeral
            ]

        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["button"],
        code: `
            $onlyIf[$customID==DeleteVar;]
            $onlyIf[$authorID==$botOwnerID;$interactionReply[$ephemeral You cannot use these buttons.They are reserved for the bot owner]]
            $modal[DeleteVarModal;Delete Variable Menu]
            $addTextInput[VarName;The Variable Name;Short;true]
            $addTextInput[VarID;The Variable ID;Short;true]
            
        `
    },
    {
        type: "interactionCreate",
        allowedInteractionTypes: ["modal"],
        code: `
            $onlyIf[$customID==DeleteVarModal;]
            $deleteVar[$input[VarName];$input[VarID]]
            $interactionReply[ Deleted Variable: $input[VarName] ID: $input[VarID] successfully
            $ephemeral
            ]

        `
    },
]

