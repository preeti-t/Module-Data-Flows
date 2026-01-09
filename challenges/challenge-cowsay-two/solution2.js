// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// → Using Node.js built-in readline module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Make supplies for our speech bubble

// → We'll calculate top and bottom lines dynamically later
let topLine = "_";
let bottomLine = "-";
const defaultSaying = "Mooooo";


// 3. Make a cow that takes a string

const cow = (saying) => {
    // how did you make the cow before?
    
  // → Similar to solution1: dynamic speech bubble + ASCII cow
    if (!saying) {
        saying = defaultSaying;
    }
    topLine = "_".repeat(saying.length + 2);
    bottomLine = "-".repeat(saying.length + 2);

    return `
 ${topLine}
< ${saying} >
 ${bottomLine}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
}


// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)

// → Ask user what the cow should say
rl.question("What should the cow say? ", (answer) => {
    console.log(cow(answer));
    rl.close();
});
