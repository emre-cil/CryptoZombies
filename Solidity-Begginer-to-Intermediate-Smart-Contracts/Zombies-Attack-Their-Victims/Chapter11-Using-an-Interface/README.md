# Chapter 11: Using an Interface

Continuing our previous example with `NumberInterface`, once we've defined the interface as:

```
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}

```

We can use it in a contract as follows:

```
contract MyContract {
  address NumberInterfaceAddress = 0xab38...
  // ^ The address of the FavoriteNumber contract on Ethereum
  NumberInterface numberContract = NumberInterface(NumberInterfaceAddress);
  // Now `numberContract` is pointing to the other contract

  function someFunction() public {
    // Now we can call `getNum` from that contract:
    uint num = numberContract.getNum(msg.sender);
    // ...and do something with `num` here
  }
}

```

In this way, your contract can interact with any other contract on the Ethereum blockchain, as long they expose those functions as `public` or `external`.

# Put it to the test

Let's set up our contract to read from the CryptoKitties smart contract!

1.  I've saved the address of the CryptoKitties contract in the code for you, under a variable named `ckAddress`. In the next line, create a `KittyInterface` named `kittyContract`, and initialize it with `ckAddress` — just like we did with `numberContract` above.
