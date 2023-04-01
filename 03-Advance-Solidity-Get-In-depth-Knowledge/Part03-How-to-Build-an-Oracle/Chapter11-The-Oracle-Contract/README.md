# Chapter 11: The Oracle Contract

The `setLatestEthPrice` function is almost finished. Next, you'll have to:

- Instantiate the `CallerContractInstance`. In case you forgot how to do this or you need a bit of inspiration, take a quick glance at the following example:

  ```
  MyContractInterface myContractInstance;
  myContractInstance = MyContractInterface(contractAddress)

  ```

- With the caller contract instantiated, you can now execute its `callback` method and pass it the new ETH price and the `id` of the request.
- Lastly, you'd want to fire an event to notify the front-end that the price has been successfully updated.

## Put It to the Test

1.  Let's create a `CallerContractInterface` named `callerContractInstance`.
2.  Initialize `callerContractInstance` with the address of the caller contract, just like we did with `myContractInstance` above. Note that the address of the caller contract should come from the function parameters.
3.  Run the `callerContractInstance.callback` function, passing it `_ethPrice` and `_id`.
4.  Lastly, `emit` the `SetLatestEthPriceEvent`. It takes two parameters: `_ethPrice` and `_callerAddress`.

Give yourself a pat on the back, you just finished writing the oracle smart contract!💪🏻💪🏻💪🏻
