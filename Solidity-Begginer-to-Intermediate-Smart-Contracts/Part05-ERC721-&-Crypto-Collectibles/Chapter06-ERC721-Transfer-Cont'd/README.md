# Chapter 6: ERC721: Transfer Cont'd

Great! That was the difficult part — now implementing the external `transferFrom` function will be easy, since our `_transfer` function already does almost all the heavy lifting.

## Putting it to the Test

1.  First, we want to make sure only the owner or the approved address of a token/zombie can transfer it. Let's define a mapping called `zombieApprovals`. It should map a `uint` to an `address`. This way, when someone that is not the owner calls `transferFrom` with a `_tokenId`, we can use this mapping to quickly look up if he is approved to take that token.
2.  Next, let's add a `require` statement to `transferFrom`. It should make sure that only the owner or the approved address of a token/zombie can transfer it.
3.  Lastly, don't forget to call `_transfer`.

> Note: Checking that only the owner or the approved address of a token/zombie can transfer it means that at least one of these conditions must be true:

> `zombieToOwner` for `_tokenId` is equal to `msg.sender`

> or

> `zombieApprovals` for `_tokenId` is equal to `msg.sender`

Don't worry about filling in data in the `zombieApprovals` mapping, we'll do it in the next chapter.
