# Chapter 1: Settings Things Up

Before we begin, let's be clear: this is an intermediate lesson, and it requires a bit of **_JavaScript_** and **_Solidity_** knowledge.

If you're new to Solidity, it's highly recommended that you go over the first lessons before starting this one.

If you are not comfortable with **JavaScript**, consider going through a tutorial elsewhere before starting this lesson.

---

Now, let's suppose you're building a DeFi dapp, and want to give your users the ability to withdraw ETH worth a certain amount of USD. To fulfill this request, your smart contract (for simplicity's sake we'll call it the "caller contract" from here onwards) must know how much one Ether is worth.

And here's the thing: a JavaScript application can easily fetch this kind of information, making requests to the Binance public API (or any other service that publicly provides a price feed). But, a smart contract can't directly access data from the outside world. Instead, it relies on an **_oracle_** to pull the data.

Phew! At first glance, this sounds like a complicated thing to do 🤯. But, by taking it one step at a time, we'll set you on a smooth sail.

Now I know that a picture is sometimes worth a thousand words, so here's a simple diagram that explains how this works:

![Eth Price Oracle Overview](https://cryptozombies.io/en/lesson/14/chapter/ASSET_PATH/static/image/lesson-14/EthPriceOracleOverview.png)

Let this sink in before you read on.

For now, let's initialize your new project.

## Put It to the Test

Fire up a terminal window and move into your projects directory. Then, create a directory called `EthPriceOracle` and `cd` into it.

1.  In the box to the right, initialize your new project by running the `npm init -y` command.
2.  Next, let's install the following dependencies: `truffle`, `openzeppelin-solidity`, `loom-js`, `loom-truffle-provider`, `bn.js`, and `axios`.

    > Note: You can install multiple packages by running something like the following:

    ```
    npm i <package-a> <package-b> <package-c>

    ```

    Why do you need all these packages you ask? Read on and things will become clearer.

    You'll be using Truffle to compile and deploy your smart contracts to Loom Testnet so we've gone ahead and created two bare-bones Truffle projects:

    - The oracle will live in the `oracle` directory:

    ```
    mkdir oracle && cd oracle && npx truffle init && cd ..

    ```

    ```
    ✔ Preparing to download box
    ✔ Downloading
    ✔ cleaning up temporary files
    ✔ Setting up box

    ```

    - The caller contract will live in the `caller` directory:

    ```
    mkdir caller && cd caller && npx truffle init && cd ..

    ```

    ```
    ✔ Preparing to download box
    ✔ Downloading
    ✔ cleaning up temporary files
    ✔ Setting up box

    ```

    We trust you to do the same and, if everything goes well, your directory structure should look something like the following:

    ```
    tree -L 2 -I node_modules

    ```

    ```
    .
    ├── caller
    │   ├── contracts
    │   ├── migrations
    │   ├── test
    │   └── truffle-config.js
    ├── oracle
    │   ├── contracts
    │   ├── migrations
    │   ├── test
    │   └── truffle-config.js
    └── package.json

    ```

    > Note: Learning how to use Truffle is beyond the scope of this lesson. If you're inclined to learn more, check out our very own [Deploying DApps with Truffle](https://cryptozombies.io/en/lesson/10) lesson.
