# Chapter 8: Deploy to Loom Testnet

In this chapter, we’re going to deploy our smart contract to the **_Loom_** Testnet, but before doing the deployment, some prep work is needed.

First, we should create our own **_Loom_** private key. The easiest way to do it is by downloading and installing **_Loom_** according to this [tutorial](https://loomx.io/developers/en/basic-install-all.html).

Next, creating a private key is as as simple as this:

```
$./loom genkey -a public_key -k private_key
local address: 0x42F401139048AB106c9e25DCae0Cf4b1Df985c39
local address base64: QvQBE5BIqxBsniXcrgz0sd+YXDk=
$cat private_key
/i0Qi8e/E+kVEIJLRPV5HJgn0sQBVi88EQw/Mq4ePFD1JGV1Nm14dA446BsPe3ajte3t/tpj7HaHDL84+Ce4Dg==

```

> Note: Never reveal your private keys! We are only doing this for simplicity's sake.

## Updating truffle.js

The first thing we are required to do is to initialize `loom-truffle-provider`. The syntax is similar to the one we've already used for `HDWalletProvider`:

```
const LoomTruffleProvider = require('loom-truffle-provider');

```

Next, just as we did in chapter 5, we'll have to let **_Truffle_** know how to deploy on **_Loom_** testnet. To do so, let's add a new object to `truffle.js`

```
loom_testnet: {
  provider: function() {
    const privateKey = 'YOUR_PRIVATE_KEY'
    const chainId = 'extdev-plasma-us1';
    const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc';
    const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query';
    return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
    },
  network_id: '9545242630824'
}

```

# Put it to the test:

1.  Add the line of code that initializes `LoomTruffleProvider`.
2.  Place the configuration for `loom_testnet` near the bottom of the file.
