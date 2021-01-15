let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./independent_p_lib.js");

// Write your code below:
async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);

  console.log(
    `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`
  );
}

serveDinnerAgain();

/**
 * Review

Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

    async...await is syntactic sugar built on native JavaScript promises and generators.
    We declare an async function with the keyword async.
    Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
    await returns the resolved value of the awaited promise.
    We can write multiple await statements to produce code that reads like synchronous code.
    We use try...catch statements within our async functions for error handling.
    We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.


 */

///read these articles

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach
