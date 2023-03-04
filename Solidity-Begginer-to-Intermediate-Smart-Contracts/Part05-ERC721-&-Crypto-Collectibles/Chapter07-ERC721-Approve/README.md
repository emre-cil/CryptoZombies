# Chapter 7: ERC721: Approve

Now, let's implement `approve`.

Remember, with `approve` the transfer happens in 2 steps:

1.  You, the owner, call `approve` and give it the `_approved` address of the new owner, and the `_tokenId` you want them to take.
2.  The new owner calls `transferFrom` with the `_tokenId`. Next, the contract checks to make sure the new owner has been already approved, and then transfers them the token.

Because this happens in 2 function calls, we need to use the `zombieApprovals` data structure to store who's been approved for what in between function calls.

## Putting it to the Test

1.  In the `approve` function, we want to make sure only the owner of the token can give someone approval to take it. So we need to add the `onlyOwnerOf` modifier to `approve`
2.  For the body of the function, set `zombieApprovals` for `_tokenId` equal to the `_approved` address.
