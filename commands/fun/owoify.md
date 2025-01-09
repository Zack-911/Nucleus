---
description: Owoify Your Text
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: false
---

# Eval

***

## Usage:

```
k!owoify <text>>
```

$loadEmbeds[{
  "title": "Hello",
  "description": "My id: {member.id}, and level {level}",
  "color": 53380,
  "footer": {
    "text": "This is the footer text"
  },
  "fields": [
    {
      "name": "Field 1",
      "value": "This is the first field",
      "inline": true
    },
    {
      "name": "Field 2",
      "value": "This is the second field",
      "inline": true
    },
    {
      "name": "Field 3",
      "value": "This field takes up the whole line",
      "inline": false
    }
  ]
}]
***

## Fields:

<table><thead><tr><th>Name</th><th width="215">Description</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td>text</td><td>The text you want to owoify</td><td>String</td><td>True</td></tr></tbody></table>

***

## Output:

<div align="left"><figure><img src="../../.gitbook/assets/Owofify.png" alt=""><figcaption></figcaption></figure></div>

***

## Source

> Are you interested in how this command works behind the scenes? Click [here](https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Fun/owoify.js) to view it. Oh and it might be a pure spaghetti, good luck, brave soul
