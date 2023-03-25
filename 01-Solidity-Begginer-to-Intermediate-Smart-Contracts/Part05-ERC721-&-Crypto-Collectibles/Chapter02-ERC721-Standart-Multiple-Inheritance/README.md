# Chapter 2: ERC721 Standard, Multiple Inheritance

Let's take a look at the ERC721 standard:

```
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

  function balanceOf(address _owner) external view returns (uint256);
  function ownerOf(uint256 _tokenId) external view returns (address);
  function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
  function approve(address _approved, uint256 _tokenId) external payable;
}

```

This is the list of methods we'll need to implement, which we'll be doing over the coming chapters in pieces.

It looks like a lot, but don't get overwhelmed! We're here to walk you through it.

### Implementing a token contract

When implementing a token contract, the first thing we do is copy the interface to its own Solidity file and import it, `import "./erc721.sol";`. Then we have our contract inherit from it, and we override each method with a function definition.

But wait — `ZombieOwnership` is already inheriting from `ZombieAttack` — how can it also inherit from `ERC721`?

Luckily in Solidity, your contract can inherit from multiple contracts as follows:

```
contract SatoshiNakamoto is NickSzabo, HalFinney {
  // Omg, the secrets of the universe revealed!
}

```

As you can see, when using multiple inheritance, you just separate the multiple contracts you're inheriting from with a comma, `,`. In this case, our contract is inheriting from `NickSzabo` and `HalFinney`.

Let's give it a try.

## Putting it to the Test

We've already created `erc721.sol` with the interface above for you.

1.  Import `erc721.sol` into `zombieownership.sol`
2.  Declare that `ZombieOwnership` inherits from `ZombieAttack` AND `ERC721`
