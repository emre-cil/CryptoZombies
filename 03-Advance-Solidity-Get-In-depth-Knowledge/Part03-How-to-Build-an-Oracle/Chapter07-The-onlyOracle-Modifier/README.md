# Chapter 7: The onlyOracle Modifier

Did you figure out the answer?

Before you wrap up the `callback` function, you must make sure that only the oracle contract is allowed to call it.

In this chapter, you'll create a modifier that prevents other contracts from calling your `callback` function.

> Note: We'll not delve into how modifiers work. If the details are fuzzy, go ahead and check out our previous lessons.

Remember that you've already stored the address of the oracle into a variable called `oracleAddress`. Thus, the modifier should just check that the address calling this function is `oracleAddress`.

But how do I know the address that calls a function you ask?

In Solidity, `msg.sender` is a special variable that specifies the sender of the message. In other words, you can use `msg.sender` to figure out what address called your function.

## Put It To the Test

We've gone ahead and defined a modifier named `onlyOracle` and attached it to the `callback` function. Let's fill in the body of the modifier so that only the oracle is allowed to call this function.

1.  The first line of code should use `require` to make sure that `msg.sender` equals `oracleAddress`. If not, it should throw the following error: "You are not authorized to call this function."
2.  Remember from our previous lessons that, to execute the rest of the function, you should place an `_;` inside your modifier. Don't forget to add it.
