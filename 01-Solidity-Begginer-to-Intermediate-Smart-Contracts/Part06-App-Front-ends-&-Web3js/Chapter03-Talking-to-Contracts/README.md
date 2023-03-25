# Chapter 3: Talking to Contracts

Now that we've initialized Web3.js with MetaMask's Web3 provider, let's set it up to talk to our smart contract.

Web3.js will need 2 things to talk to your contract: its **_address_** and its **_ABI_**.

## Contract Address

After you finish writing your smart contract, you will compile it and deploy it to Ethereum. We're going to cover **deployment** in the **next lesson**, but since that's quite a different process from writing code, we've decided to go out of order and cover Web3.js first.

After you deploy your contract, it gets a fixed address on Ethereum where it will live forever. If you recall from Lesson 2, the address of the CryptoKitties contract on Ethereum mainnet is `0x06012c8cf97BEaD5deAe237070F9587f8E7A266d`.

You'll need to copy this address after deploying in order to talk to your smart contract.

## Contract ABI

The other thing Web3.js will need to talk to your contract is its **_ABI_**.

ABI stands for Application Binary Interface. Basically it's a representation of your contracts' methods in JSON format that tells Web3.js how to format function calls in a way your contract will understand.

When you compile your contract to deploy to Ethereum (which we'll cover in Lesson 7), the Solidity compiler will give you the ABI, so you'll need to copy and save this in addition to the contract address.

Since we haven't covered deployment yet, for this lesson we've compiled the ABI for you and put it in a file named `cryptozombies_abi.js`, stored in variable called `cryptoZombiesABI`.

If we include `cryptozombies_abi.js` in our project, we'll be able to access the CryptoZombies ABI using that variable.

## Instantiating a Web3.js Contract

Once you have your contract's address and ABI, you can instantiate it in Web3 as follows:

```
// Instantiate myContract
var myContract = new web3js.eth.Contract(myABI, myContractAddress);

```

## Put it to the Test

1.  In the `<head>` of our document, include another script tag for `cryptozombies_abi.js` so we can import the ABI definition into our project.
2.  At the beginning of our `<script>` tag in the `<body>`, declare a `var` named `cryptoZombies`, but don't set it equal to anything. Later we'll use this variable to store our instantiated contract.
3.  Next, create a `function` named `startApp()`. We'll fill in the body in the next 2 steps.
4.  The first thing `startApp()` should do is declare a `var` named `cryptoZombiesAddress` and set it equal to the string `"YOUR_CONTRACT_ADDRESS"` (this is the address of the CryptoZombies contract on mainnet).
5.  Lastly, let's instantiate our contract. Set `cryptoZombies` equal to a new `web3js.eth.Contract` like we did in the example code above. (Using `cryptoZombiesABI`, which gets imported with our script tag, and `cryptoZombiesAddress` from above).
