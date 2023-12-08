const { error } = require("console");
const fs = require("fs");

/**
 * code to read the content from a file
 */
/** 
fs.readFile("input.txt", (err, content) => {
  if (err) {
    return console.log(err);
  }
  console.log("Read content is : " + content);
});
*/
/** 
const content = fs.readFileSync('input.txt')
console.log("Read content is : " + content);

console.log("Hello from last");
*/


/**
 * code to write the content to the file
 */

/** 
fs.writeFile('output.txt', "Hello Student's ", err => {
 if(err){
    return console.log(err);
 }
 console.log("Written successfully");
})
*/

fs.writeFileSync('output1.txt', "Hello Student's again !")
console.log("Last line");
