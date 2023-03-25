# Chapter 5: Chainlink Data Feeds Decimals

Boom! We now have a function that can pull the latest price of Ethereum in terms of the United States Dollar!

Now, as you know, decimals places don't work so well in Solidity, so what happens when we try to call this function? Can you guess how the answer is going to look like?

Well, to save you time, if we were to call this function, we'd get a response similar to this:

```
310523971888

```

Wait... is Ethereum really that expensive?

Well, maybe sometime in the distant future it might be, but at the time of writing, it's not even close. Right now, the price is about `$3,105.52`.

So how do we know where the decimal place goes? The answer is simple: there is a `decimals` function that tells us!

Can you make a `getDecimals` function that returns how many decimals this contract has by just looking at the interface? I bet you can!

## Putting it to the test

1.  Create a `public view` function called `getDecimals` that returns the result of the `decimals` function from the `AggregatorV3Interface`. When you declare the function, keep in mind that the return value is a `uint8`.
2.  The first line of code should call the `priceFeed.decimals()` function, and store the result in a variable named `decimals` of type `uint8`.
3.  The second line of the function should return the `decimals` variable.
