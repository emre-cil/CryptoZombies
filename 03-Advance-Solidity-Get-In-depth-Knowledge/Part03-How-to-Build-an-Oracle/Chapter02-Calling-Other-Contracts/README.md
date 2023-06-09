# Chapter 2: Calling Other Contracts

Now, instead of jumping directly to the oracle smart contract, we'll continue by looking into the caller smart contract. This is to help you understand the process from start to finish.

One of the things the caller smart contract does is to interact with the oracle. Let's see how you can do this.

For the caller smart contract to interact with the oracle, you must provide it with the following bits of information:

- The address of the oracle smart contract
- The signature of the function you want to call

I reckon that the simplest approach would be to just hardcode the address of the oracle smart contract.

But let’s put on our blockchain developer hat🎩and try to figure out if this is what we want to do.

The answer has to do with how the blockchains work. Meaning that, once a contract is deployed, there's no way you can update it. As the natives call it, **_contracts are immutable_**.

If you think about it, you'll see that there are plenty of cases in which you would want to update the address of the oracle. As an example, say there's a bug and the oracle gets redeployed. What then? You'll have to redeploy everything. And update your front-end.

Yeah, this is costly, time-consuming, and it harms the user experience😣.

So the way you'd want to go about this is to write a simple function that saves the address of the oracle smart contract in a variable. Then, it instantiates the oracle smart contract so your contract can call its functions at any time.

## Put It to the Test

In the box to the right, we've pasted an empty shell for the caller contract.

1.  Declare an `address` named `oracleAddress`. Make it `private`, and don't assign it to anything.
2.  Next, create a function called `setOracleInstanceAddress`. This function takes an `address` argument named `_oracleInstanceAddress`. It's a `public` function, and it doesn't return anything.
3.  The first line of code should set `oracleAddress` to `_oracleInstanceAddress`.

You'll continue fleshing out this function in the next chapter.
