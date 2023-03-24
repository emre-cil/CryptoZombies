# Chapter 9: Define our Chainlink VRF variables

Now this part is pretty easy, we just need to define our `keyHash` and `fee` in our constructor. We also should make a global variable called `randomResult` that will store the most recent return of a Chainlink VRF.

## Putting it to the test

1.  Define three `public` variables:

    - `keyHash`, a `bytes32`
    - `fee`, a `uint256`
    - `randomResult`, a `uint256`

2.  Fill in the body of the newly created constructor, by setting the `keyHash` variable to `0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311`, and the `fee` to `100000000000000000`

> Wondering where these values came from? We did all the legwork for you, and pulled them from the [Chainlink VRF Contract Addresses](https://docs.chain.link/docs/vrf-contracts/#rinkeby) page of the Chainlink documentation.
