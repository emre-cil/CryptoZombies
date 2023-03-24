# Chapter 3: AggregatorV3Interface

Great work! Now, to interact with one of data fed contracts, since we already have the interface, all we need is the address. We can use the on-chain [Feeds Registry](https://docs.chain.link/docs/feed-registry/) which is an on-chain contract that keeps track of where all these feeds are, or we can just choose a contract address of our choosing by browsing all the [contract addresses](https://docs.chain.link/docs/reference-contracts/).

Since we are trying to get the price of ETH in terms of USD, we need to pick the data feed that has this information.

> IMPORTANT: Each network will have a _different_ address for each piece of data you want. The address of the `ETH/USD` contract will be different on Mainnet Ethereum from Mainnet Polygon, from a Rinkeby testnet, etc.

We will use the data feed of Rinkeby for this demo, you can find all the addresses in the [Rinkeby Data Feeds Documentation](https://docs.chain.link/docs/ethereum-addresses/#Rinkeby%20Testnet). We are using Rinkeby, because, in later courses, you'll learn how to deploy to the Rinkeby test net!

## Putting it to the test

1.  Create a `public` global variable (a variable outside any function) named `priceFeed` of type `AggregatorV3Interface`.
2.  Create a `constructor`.
3.  Instantiate the `AggregatorV3Interface` contract, passing it the Mainnet Ethereum `ETH/USD` contract address (`0x8A753747A1Fa494EC906cE90E9f37563A8AF630e`) as a parameter, and store the result in the `priceFeed` variable.

> Hint: To verify that you've specified the correct address of the `ETH/USD` data feed contract deployed to the Rinkeby network, you can check the [Ethereum Data Feeds](https://docs.chain.link/docs/ethereum-addresses/#Rinkeby%20Testnet) page of the Chainlink documentation
