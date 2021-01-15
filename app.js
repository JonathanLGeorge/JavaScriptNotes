const shopForBeans = require("./library.js");
const myPromise = require("./library.js");
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// async function noAwait() {
//   let value = myPromise();
//   console.log(value);
// }

// async function yesAwait() {
//   let value = await myPromise();
//   console.log(value);
// }

// noAwait(); // Prints: Promise { <pending> }
// yesAwait(); // Prints: Yay, I resolved!
