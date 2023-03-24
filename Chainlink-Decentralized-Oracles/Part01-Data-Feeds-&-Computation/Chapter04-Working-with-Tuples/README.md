# Chapter 4: Working with Tuples

Now we must retrieve the latest ETH price by calling the `latestRoundData` function of the `priceFeed` contract. This function has all the information we are looking for, plus some:

- `roundId`: The round ID. Each price update gets a unique round ID.
- `answer`: The current price.
- `startedAt`: Timestamp of when the round started.
- `updatedAt`: Timestamp of when the round was updated.
- `answeredInRound`: The round ID of the round in which the answer was computed.

## Tuples

But before we do call this function, let me ask you something: do you know what tuples are?

If you recall the answer from our previous lessons, feel free to skip this section. If not, just follow along and we'll explain.

A `tuple` is a way in Solidity to create a syntactic grouping of expressions.

If a function returns multiple variables, such as the `latestRoundData` function, we consider the return type to be a `tuple` of many types.

```
function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );

```

In order for us to assign variables to each return variable, we use the tuple syntax by grouping a list of variables in parentheses:

```
 (uint80 roundId, int answer, uint startedAt, uint updatedAt, uint80 answeredInRound) = priceFeed.latestRoundData();

```

We can also rename the variables to anything that we please. For example, let's rename `answer` to `price`:

```
 (uint80 roundId, int price, uint startedAt, uint updatedAt, uint80 answeredInRound) = priceFeed.latestRoundData();

```

Additionally, if there are variables that we are not going to use, it's often best practice to leave them as blanks, like so:

```
 (,int price,,,) = priceFeed.latestRoundData();

```

This way, we can easily see what variables are important to us, and not declare anything extra.

## Putting it to the test

1.  Create a `public view` function named `getLatestPrice`. The function returns an `int`.
2.  Call the `latestRoundData` function of the`priceFeed` contract, and store only the `answer` in an `int` variable named `price`. Exclude any other variables from being declared in our function call. If you can't remember the syntax for doing this, check the example from above. But first, try to do it without peeking.
3.  Return the `price` variable.
