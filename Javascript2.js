const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("Hirdesh", "Rohan")

console.log("The content of File is ");
console.log(text);

console.log("Creating a New File...");
fs.writeFileSync("rohan.txt", text);
