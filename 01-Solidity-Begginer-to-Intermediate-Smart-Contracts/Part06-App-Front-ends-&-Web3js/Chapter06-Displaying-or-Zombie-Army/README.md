# Chapter 6: Displaying our Zombie Army

This tutorial wouldn't be complete if we didn't show you how to actually display the data you get back from the contract.

However, realistically, you'll want to use a front-end framework like React or Vue.js in your app, since they make your life a lot easier as a front-end developer. But covering React or Vue.js is way outside the scope of this tutorial — that would be an entire tutorial of multiple lessons in itself.

So in order to keep CryptoZombies.io focused on Ethereum and smart contracts, we're just going to show a quick example in JQuery to demonstrate how you could parse and display the data you get back from your smart contract.

## Displaying zombie data — a rough example

We've added an empty `<div id="zombies"></div>` to the body of our document, as well as an empty `displayZombies` function.

Recall that in the previous chapter we called `displayZombies` from inside `startApp()` with the result of a call to `getZombiesByOwner`. It will be passed an array of zombie IDs that looks something like:

```
[0, 13, 47]

```

Thus we'll want our `displayZombies` function to:

1.  First clear the contents of the `#zombies` div, if there's anything already inside it. (This way if the user changes their active MetaMask account, it will clear their old zombie army before loading the new one).
2.  Loop through each `id`, and for each one call `getZombieDetails(id)` to look up all the information for that zombie from our smart contract, then
3.  Put the information about that zombie into an HTML template to format it for display, and append that template to the `#zombies` div.

Again, we're just using JQuery here, which doesn't have a templating engine by default, so this is going to be ugly. But here's a simple example of how we could output this data for each zombie:

```
// Look up zombie details from our contract. Returns a `zombie` object
getZombieDetails(id)
.then(function(zombie) {
  // Using ES6's "template literals" to inject variables into the HTML.
  // Append each one to our #zombies div
  $("#zombies").append(`<div class="zombie">
    <ul>
      <li>Name: ${zombie.name}</li>
      <li>DNA: ${zombie.dna}</li>
      <li>Level: ${zombie.level}</li>
      <li>Wins: ${zombie.winCount}</li>
      <li>Losses: ${zombie.lossCount}</li>
      <li>Ready Time: ${zombie.readyTime}</li>
    </ul>
  </div>`);
});

```

## What about displaying the zombie sprites?

In the above example, we're simply displaying the DNA as a string. But in your DApp, you would want to convert this to images to display your zombie.

We did this by splitting up the DNA string into substrings, and having every 2 digits correspond to an image. Something like:

```
// Get an integer 1-7 that represents our zombie head:
var head = parseInt(zombie.dna.substring(0, 2)) % 7 + 1

// We have 7 head images with sequential filenames:
var headSrc = "../assets/zombieparts/head-" + head + ".png"

```

Each component is positioned with CSS using absolute positioning, to overlay it over the other images.

If you want to see our exact implementation, we've open sourced the Vue.js component we use for the zombie's appearance, which you can view [here](https://github.com/loomnetwork/zombie-char-component).

However, because there's a lot of code in that file, it's outside the scope of this tutorial. For this lesson, we'll stick with the extremely simple JQuery implementation above, and leave it to you to dive into a more beautiful implementation as homework 😉

## Put it to the Test

We created an empty `displayZombies` function for you. Let's fill it in.

1.  The first thing we'll want to do is empty the `#zombies` div. In JQuery, you can do this with `$("#zombies").empty();`.
2.  Next, we'll want to loop through all the ids, using a for loop: `for (const id of ids) {}`
3.  Inside the for loop, copy/paste the code block above that called `getZombieDetails(id)` for each id and then used `$("#zombies").append(...)` to add it to our HTML.
