---
description: Before diving further, you might be asking the following...
---

# **Argument Types**

---

### **What are Argument Types?**

Argument types define the kind of input a command accepts. These can include values like **String**, **Number**, **User**, etc. Understanding these types will help you use Kiko San commands effectively.

---

## **Examples of Argument Types**  

{% hint style="info" %}
For example, a **Number** field will interpret the input as a number and throw an error if the value provided is not numeric.
{% endhint %}

1. **String**:  
   - Accepts any value, acting as a placeholder for **Any**.  
   - Example: `this is a guide.`  

2. **Number**:  
   - Accepts only numeric values.  
   - Supports integers, decimals, and scientific notation (e.g., `10`, `2.5`, `1e2`).  
   - Note: Values beyond ±2^63 may lose precision, causing unexpected outcomes.  

3. **Boolean**:  
   - Only allows **true** or **false** as input.  

4. **Channel**:  
   - Requires a valid channel input.  
   - Example: `#<channel-name>` or `<channel-ID>`.  

5. **User**:  
   - Requires a valid user input.  
   - Accepts username, user ID, or mentions.  

6. **Role**:  
   - Requires a valid role input.  
   - Example: `@<role>` or `<role-ID>`.  

7. **Time**:  
   - Accepts either a numeric value (in milliseconds) or a string that can be parsed into time.  
   - Examples: `10m`, `3h30m`, `1d2h10s`.  

---