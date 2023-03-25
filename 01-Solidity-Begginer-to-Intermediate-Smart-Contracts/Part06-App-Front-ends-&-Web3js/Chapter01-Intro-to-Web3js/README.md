# Chapter 1: Intro to Web3.js

By completing Lesson 5, our zombie DApp is now complete. Now we're going to create a basic web page where your users can interact with it.

To do this, we're going to use a JavaScript library from the Ethereum Foundation called **_Web3.js_**.

## What is Web3.js?

Remember, the Ethereum network is made up of nodes, with each containing a copy of the blockchain. When you want to call a function on a smart contract, you need to query one of these nodes and tell it:

1.  The address of the smart contract
2.  The function you want to call, and
3.  The variables you want to pass to that function.

Ethereum nodes only speak a language called **_JSON-RPC_**, which isn't very human-readable. A query to tell the node you want to call a function on a contract looks something like this:

```
// Yeah... Good luck writing all your function calls this way!
// Scroll right ==>
{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from":"0xb60e8dd61c5d32be8058bb8eb970870f07233155","to":"0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas":"0x76c0","gasPrice":"0x9184e72a000","value":"0x9184e72a","data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}

```

Luckily, Web3.js hides these nasty queries below the surface, so you only need to interact with a convenient and easily readable JavaScript interface.

Instead of needing to construct the above query, calling a function in your code will look something like this:

```
CryptoZombies.methods.createRandomZombie("Vitalik Nakamoto 🤔")
  .send({ from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155", gas: "3000000" })

```

We'll explain the syntax in detail over the next few chapters, but first let's get your project set up with Web3.js.

## Getting started

Depending on your project's workflow, you can add Web3.js to your project using most package tools:

```
// Using NPM
npm install web3

// Using Yarn
yarn add web3

// Using Bower
bower install web3

// ...etc.

```

Or you can simply download the minified `.js` file from [github](https://github.com/ChainSafe/web3.js/blob/1.x/dist/web3.min.js) and include it in your project:

```
<script language="javascript" type="text/javascript" src="web3.min.js"></script>

```

Since we don't want to make too many assumptions about your development environment and what package manager you use, for this tutorial we're going to simply include Web3 in our project using a script tag as above.

## Put it to the Test

We've created a shell of an HTML project file for you, `index.html`. Let's assume we have a copy of `web3.min.js` in the same folder as `index.html`.

1.  Go ahead and copy/paste the script tag above into our project so we can use `web3.js`
