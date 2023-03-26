# Chapter 10: Deploy to Basechain

Congratulations! You've successfully deployed to **_Loom_** Testnet. But can you guess what's coming next?🤔

Yup, you're right! This chapter will walk you through the process of deploying to **_Basechain_** (that is our Mainnet).

Here's a brief rundown of what you'll do in this chapter:

- Create a new private key.
- Creating a new private key is pretty straightforward. But since we're talking about deploying to the main net, it's time to get more serious about security. Thus, we'll show you how to securely pass the private key to **Truffle**.
- Tell **Truffle** how to deploy to **_Basechain_** by adding a new object to the `truffle.js` configuration file.
- Whitelist your deployment keys so you can deploy to **_Basechain_**.
- Lastly, we wrap everything up by actually deploying the smart contract.

### Create a new private key

You already know how to create a private key. However, we must change the name of the file in which we're going to save it:

```
./loom genkey -a mainnet_public_key -k mainnet_private_key
local address: 0x07419790A773Cc6a2840f1c092240922B61eC778
local address base64: B0GXkKdzzGooQPHAkiQJIrYex3g=

```

### Securely pass the private key to Truffle

The next thing we want to do is to prevent the private key file from being pushed to GitHub. To do so, let's create a new file called `.gitignore`:

```
touch .gitignore

```

Now let's "tell" GitHub that we want it to ignore the file in which we saved the private key by entering the following command:

```
echo mainnet_private_key >> .gitignore

```

Now that we made sure our secrets aren't going to be pushed to GitHub, we must edit the `truffle.js` configuration file and make it so that **Truffle** reads the private key from this file.

Let's start by importing a couple of things:

```
const { readFileSync } = require('fs')
const path = require('path')
const { join } = require('path')

```

Next, we would want to define a function that reads the private key from a file and initializes a new `LoomTruffleProvider`:

```
function getLoomProviderWithPrivateKey (privateKeyPath, chainId, writeUrl, readUrl) {
  const privateKey = readFileSync(privateKeyPath, 'utf-8');
  return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
}

```

Pretty straightforward, isn't it?

### Tell Truffle how to deploy to Basechain

Now, we must let **Truffle** know how to deploy to **_Basechain_**. To do so, let's add a new object to `truffle.js`

```
basechain: {
  provider: function() {
    const chainId = 'default';
    const writeUrl = 'http://basechain.dappchains.com/rpc';
    const readUrl = 'http://basechain.dappchains.com/query';
    const privateKeyPath = path.join(__dirname, 'mainnet_private_key');
    const loomTruffleProvider = getLoomProviderWithPrivateKey(privateKeyPath, chainId, writeUrl, readUrl);
    return loomTruffleProvider;
    },
  network_id: '*'
}

```

At this point, your `truffle.js` file should look something like the following:

```
// Initialize HDWalletProvider
const HDWalletProvider = require("truffle-hdwallet-provider");

const { readFileSync } = require('fs')
const path = require('path')
const { join } = require('path')


// Set your own mnemonic here
const mnemonic = "YOUR_MNEMONIC";

function getLoomProviderWithPrivateKey (privateKeyPath, chainId, writeUrl, readUrl) {
  const privateKey = readFileSync(privateKeyPath, 'utf-8');
  return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
}

// Module exports to make this configuration available to Truffle itself
module.exports = {
  // Object with configuration for each network
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/YOUR_TOKEN")
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    },

    basechain: {
      provider: function() {
        const chainId = 'default';
        const writeUrl = 'http://basechain.dappchains.com/rpc';
        const readUrl = 'http://basechain.dappchains.com/query';
        const privateKeyPath = path.join(__dirname, 'mainnet_private_key');
        const loomTruffleProvider = getLoomProviderWithPrivateKey(privateKeyPath, chainId, writeUrl, readUrl);
        return loomTruffleProvider;
        },
      network_id: '*'
    }
  }
};

```

### Whitelist your deployment keys

Before deploying to **_Basechain_**, you need to whitelist your keys by following the instructions from our [Deploy to Mainnet](https://loomx.io/developers/en/deploy-loom-mainnet.html) guide. Don't worry about it right now, but keep in mind that you have to do this after you finish this tutorial.

We've gone ahead and performed all these steps and now we are ready to deploy to **_Basechain_**!

# Put it to the test:

1.  Run `truffle migrate --network basechain`.

Awesome, you just deployed your smart contract to Basechain!👏🏻
