// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
const args = process.argv.slice(2);
let saying = args.join(" ");

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let sayingDefault = 'Mooooo';

// 3. Make a cow that takes a string

function cowsay(saying) {


  // how will you make the speech bubble contain the text?
  // → Repeat characters based on the length of the string
  topLine = "_".repeat(saying.length + 2);
  bottomLine = "-".repeat(saying.length + 2);


// where will the cow picture go?
  // → Returned as part of the template string below
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



// how will you account for the parameter being empty?
// how will you make the speech bubble contain the text?
   // → If no argument is provided, use a default saying
  if (!saying) {
    saying = sayingDefault;
  }

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
// → By passing the argument into cowsay() and using console.log
console.log(cowsay(saying));
