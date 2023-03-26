# Chapter 3: The First Test- Creating a New Zombie

Before deploying to **Ethereum**, it is best to test your smart contracts locally.

You can do so by using a tool called [Ganache](https://truffleframework.com/ganache), which sets up a local **Ethereum** network.

Every time _Ganache_ starts, it creates 10 test accounts and gives them 100 Ethers to make testing easier. Since _Ganache_ and _Truffle_ are tightly integrated we can access these accounts through the `accounts` array we've mentioned in the previous chapter.

But using `accounts[0]` and `accounts[1]` would not make our tests read well, right?

To aid comprehension, we'd like to use two placeholder names- Alice and Bob. So, inside the `contract()` function, let's initialize them like so:

```
let [alice, bob] = accounts;

```

> Note: Forgive the poor grammar. In _JavaScript_, the convention is to use lowercase for variable names.

Why Alice and Bob? There is a big tradition that makes Alice and Bob or "A and B" common names used in cryptography, physics, programming, and more. It's a short but interesting history, and well worth a [read](http://cryptocouple.com/) after you complete this lesson.

Now let's move on to our first test.

## Creating a New Zombie

Say Alice wants to play our awesome game. If so, the first thing she would want to do is to **create her own zombie 🧟**. To do that, the front-end (or _Truffle_ in our case) would have to call the `createRandomZombie` function.

> Note: As a review, here is the _Solidity_ code in our contract:

```
 function createRandomZombie(string _name) public {
   require(ownerZombieCount[msg.sender] == 0);
   uint randDna = _generateRandomDna(_name);
   randDna = randDna - randDna % 100;
   _createZombie(_name, randDna);
 }

```

We begin by testing this function.

# Put it to the test

1.  The first line of the `contract()` function should declare two variables named `alice` and `bob` and initialize them as shown above.
2.  Next, we would want to properly call the `it()` function. The second parameter (a `callback` function) is going to "talk" to the blockchain, which means that the function is asynchronous. Just prepend the `async` keyword. This way, every time this function gets called with the `await` keyword, our test waits for it to return.

> Explaining how promises work is out of the scope of this lesson. Once you've finished this lesson, feel free check out the [official documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to further your knowledge.

- [test/CryptoZombies.js](https://cryptozombies.io/en/lesson/11/chapter/3#)

1

2

3

4

5

6

7

const CryptoZombies = artifacts.require("CryptoZombies");

contract("CryptoZombies", (accounts) => {

//1. initialize `alice` and `bob`

it("should be able to create a new zombie", () => { //2 & 3. Replace the first parameter and make the callback async

})

})

- [Hints](https://cryptozombies.io/en/lesson/11/chapter/3#)

#### Testing Smart Contracts with Truffle

- Chapter 1: Getting Set Up
- Chapter 2: Getting Set Up (cont'd)
- Chapter 3: The First Test- Creating a New Zombie
- Chapter 4: The First Test- Creating a New Zombie (cont'd)
- Chapter 5: The First Test- Creating a New Zombie (cont'd)
- Chapter 6: Keeping the Fun in the Game
- Chapter 7: Keeping the Fun in the Game (cont'd)
- Chapter 8: Zombie Transfers
- Chapter 9: ERC721 Token Transfers- Single Step Scenario
- Chapter 10: ERC721 Token Transfers- Two Step Scenario
- Chapter 11: ERC721 Token Transfers- Two Step Scenario (cont'd)
- Chapter 12: Zombie Attacks
- Chapter 13: More Expressive Assertions with Chai
- Chapter 14: Testing Against Loom
- Chapter 15: Lesson Complete!
