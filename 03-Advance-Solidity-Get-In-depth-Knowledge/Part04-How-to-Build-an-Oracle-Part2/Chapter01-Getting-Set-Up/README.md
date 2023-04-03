# Chapter 1: Getting Set Up

In this lesson, you're going to create the JavaScript component of the oracle that fetches the ETH price from the Binance API. Then, you'll build a basic client that interacts with the oracle.

Take a look at the screen to the right. To get everything ready for you, we've:

- Created a new JavaScript file called `EthPriceOracle.js`
- Imported a bunch of prerequisites
- Initialized a few variables
- Filled in some boilerplate code that connects your app to Extdev Testnet (refer to the `utils/common.js` tab for details).

Things to note:

- We've imported the build artifacts, and stored them in a `const` called `OracleJSON`. If you don't recall from the previous lessons what the build artifacts are, here's a quick refresher. The build artifacts are comprised of the bytecode versions of the smart contracts, ABIs, and some internal data Truffle is using to correctly deploy the code.

  What is an ABI you ask?

  In a nutshell, an ABI describes the interface between two computer programs. Don't mistake this for an API that defines an interface at a higher level (source code). An ABI describes how functions can be called and how data is stored in a machine-readable format. As an example, here's how the `pendingRequests` property of the oracle contract is described:

  ```
  {
    "constant": false,
    "id": 143,
    "name": "pendingRequests",
    "nodeType": "VariableDeclaration",
    "scope": 240,
    "src": "229:38:2",
    "stateVariable": true,
    "storageLocation": "default",
    "typeDescriptions": {
      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
      "typeString": "mapping(uint256 => bool)"
    },

  ```

  Aren’t you happy to be using higher-level languages such as JavaScript and Solidity that abstract away all this complexity? I certainly am🤓!

- We've initialized an empty array called `pendingRequests`. You'll use this later to keep track of the incoming requests.

**_☞ Spend a couple of minutes to give the code a read-through before moving on!_**

## Instantiate the Oracle Contract

The build artifacts live inside of a JSON file, and we've imported them using the following line of code:

```
const OracleJSON = require('./oracle/build/contracts/EthPriceOracle.json')

```

As an example, based on the information stored in this file, your application knows that the `setLatestEthPrice` function takes three `uint256`s as arguments (`_ethPrice`, `_callerAddress`, and `_id`), and it can create a transaction that calls this function.

But before that, interacting with a deployed contract from JavaScript requires you to instantiate it using the `web3.eth.Contract`. Let's look at an example to make the concept clear:

```
const myContract = new web3js.eth.Contract(myContractJSON.abi, myContractJSON.networks[networkId].address)

```

Note that the above example uses a variable called `networkId` that identifies the network on which your contract has been deployed. The `networkId` for Extdev is `9545242630824`, so you could declare the `networkId` variable as follows:

```
const networkId = 9545242630824

```

Easy peasy! But no matter how simple the above line of code looks, it's not such a good idea to hardcode the identifier of the network like this. Why not? Well, because doing so would require you to update `networkId` every time your contract gets deployed to a different network.

A better solution is to resolve `networkId` by calling the `web3js.eth.net.getId()` function:

```
const networkId = await web3js.eth.net.getId()

```

## Put It to the Test

1.  Create an `async function` named `getOracleContract`. It takes one parameter: `web3js`.
2.  First, let's store the result of `web3js.eth.net.getId` into a `const` called `networkId`, so you can use this in the next line. Keep in mind that `getId` is an `async` function, meaning that it returns a promise. To call this function, you must prepend `await`. This way, the code stops until the promise resolves.
3.  The second line of code should return an instance of your contract. As already mentioned, we've imported the build artifacts and saved them into a `const` called `OracleJSON`. Other than this, your code should be similar to the example above.
