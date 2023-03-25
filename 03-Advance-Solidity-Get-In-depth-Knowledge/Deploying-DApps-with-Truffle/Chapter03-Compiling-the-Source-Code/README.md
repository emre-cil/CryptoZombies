# Chapter 3: Compiling the Source Code

Congratulations! Now that we've put the project structure in place and set up `truffle-hdwallet-provider`, let's compile our contracts.

Why do we need to compile, you ask?

The _Ethereum Virtual Machine_ can't directly understand Solidity source code as we write it. Thus, we need to run a compiler that will "translate" our smart contract into machine-readable **_bytecode_**. The virtual machine then executes the bytecode, and completes the actions required by our smart contract.

Curious about how does the bytecode look like? Let's take a look:

```
"0x60806040526010600155600154600a0a6002556201518060035566038d7ea4c6800060085560006009556046600a55336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1..."

```

As you can see, a human is about as likely to be able to read bytecode as a real life zombie!

## Using the Solidity Compiler

Now that we're talking about the Solidity compiler, we should mention that the devs managed to bake in some nifty features.

Let's pretend we'd want to modify the definition of the `add` function included in `SafeMath`:

```
function add(uint16 a, uint16 b) internal returns (uint16) {
    uint16 c = a + b;
    assert(c >= a);
    return c;
}

```

If we're going to compile this function, the Solidity compiler will throw a **_warning_**:

```
safemath.sol:110:11: Warning: Function state mutability can be restricted to pure
          function add(uint16 a, uint16 b) internal returns (uint16) {
          ^ (Relevant source part starts here and spans across multiple lines).

```

What the compiler is trying to say is that our function does not read or write from/to the blockchain and that we should use the `pure` modifier.

Why is this important?

Well, making a function `pure` or `view` saves us gas. Since these functions are not going to modify the state of the blockchain, there is no need for miners to execute them. To put it in a few words, `pure` and `view` functions can be `call`ed for free.

## CryptoZombies- The Game

Remember, we've embedded our logic in a smart contract called `ZombieOwnership.sol`.

Hmmm... not a great name for a game.

Fortunately, this isn't a problem. We can use inheritance to create a smart contract with the same actions and features with whatever name we choose.

Let's create a new smart contract named `CryptoZombies` that inherits from `ZombieOwnership.sol`:

```
pragma solidity ^0.4.24;

import "./zombieownership.sol";

contract CryptoZombies is ZombieOwnership
    {

    }

```

Next, we copied all our smart contracts into the `./contracts` folder. Now the project structure should look like this:

```
.
├── contracts
    ├── Migrations.sol
    ├── CryptoZombies.sol
    ├── erc721.sol
    ├── ownable.sol
    ├── safemath.sol
    ├── zombieattack.sol
    ├── zombiefactory.sol
    ├── zombiefeeding.sol
    ├── zombiehelper.sol
    ├── zombieownership.sol
├── migrations
└── test

```

Everything is set up properly. Let's compile our project.

# Put it to the test:

1.  Execute `truffle compile`. This command should create the build artifacts and place them in the `./build/contracts` directory.

    > Note: The build artifacts are comprised of the "bytecode" versions of the smart contracts, ABIs, and some internal data **Truffle** is using to correctly deploy the code. Avoid editing these files, or **Truffle** might stop working correctly.
