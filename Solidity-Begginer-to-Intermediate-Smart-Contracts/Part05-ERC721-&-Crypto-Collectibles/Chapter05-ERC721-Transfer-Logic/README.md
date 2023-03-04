# Chapter 5: ERC721: Transfer Logic

Great, we've fixed the conflict!

Now we're going to continue our ERC721 implementation by looking at transfering ownership from one person to another.

Note that the ERC721 spec has 2 different ways to transfer tokens:

`function transferFrom(address _from, address _to, uint256 _tokenId) external payable;`

and

`function approve(address _approved, uint256 _tokenId) external payable;`

`function transferFrom(address _from, address _to, uint256 _tokenId) external payable;`

1.  The first way is the token's owner calls `transferFrom` with his `address` as the `_from` parameter, the `address` he wants to transfer to as the `_to` parameter, and the `_tokenId` of the token he wants to transfer.
2.  The second way is the token's owner first calls `approve` with the address he wants to transfer to, and the `_tokenID` . The contract then stores who is approved to take a token, usually in a `mapping (uint256 => address)`. Then, when the owner or the approved address calls `transferFrom`, the contract checks if that `msg.sender` is the owner or is approved by the owner to take the token, and if so it transfers the token to him.

Notice that both methods contain the same transfer logic. In one case the sender of the token calls the `transferFrom` function; in the other the owner or the approved receiver of the token calls it.

So it makes sense for us to abstract this logic into its own private function, `_transfer`, which is then called by `transferFrom`.

## Putting it to the Test

Let's define the logic for `_transfer`.

1.  Define a function named `_transfer`. It will take 3 arguments, `address _from`, `address _to`, and `uint256 _tokenId`. It should be a `private` function.
2.  We have 2 mappings that will change when ownership changes: `ownerZombieCount` (which keeps track of how many zombies an owner has) and `zombieToOwner` (which keeps track of who owns what).

    The first thing our function should do is increment `ownerZombieCount` for the person **receiving** the zombie (`address _to`). Use `++` to increment.

3.  Next, we'll need to **decrease** the `ownerZombieCount` for the person **sending** the zombie (`address _from`). Use `--` to decrement.
4.  Lastly, we'll want to change `zombieToOwner` mapping for this `_tokenId` so it now points to `_to`.
5.  I lied, that wasn't the last step. There's one more thing we should do.

    The ERC721 spec includes a `Transfer` event. The last line of this function should fire `Transfer` with the correct information — check `erc721.sol` to see what arguments it's expecting to be called with and implement it here.
