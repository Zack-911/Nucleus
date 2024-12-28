---
description: Before diving further, you might be asking the following...
---

# Argument Types

### What's an argument types?

As you may have noticed, some commands have their types set to values like String, Number, User, etc. You might be wondering what these represent or mean. Below, I’ll explain each of them

{% hint style="info" %}
For example, a Number field will interpret the input as a number and throw an error if the value provided is not numeric.
{% endhint %}

* **String**: Any value is allowed, as this is just a placeholder for **Any**. For example: **this is a guide.**
* **Number**: only numeric values are allowed. Numbers above 2^63 (and below -2^63) will lose precision, resulting in unexpected outcomes. For example 10, 2.5, and scientific notation too, 1e2 (100)
* **Boolean**: Only **true** and **false** are allowed.
* **Channel**: Only a valid channel can be given here like **#\<channel-name>** or **\<channel-ID>**
* **User**: Only a valid user can be given. Can be username,ID or mention
* **Role**: Only a valid role can be given here like **@\<role>** or **\<role-ID>**
* **Time:** A numeric value (milliseconds), or a string that can be parsed into time. For example: **10m**, **3h30m**, **1d2h10s**...



\




