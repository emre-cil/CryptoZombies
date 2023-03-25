# Chapter 6: Import

Whoa! You'll notice we just cleaned up the code to the right, and you now have tabs at the top of your editor. Go ahead, click between the tabs to try it out.

Our code was getting pretty long, so we split it up into multiple files to make it more manageable. This is normally how you will handle long codebases in your Solidity projects.

When you have multiple files and you want to import one file into another, Solidity uses the `import` keyword:

```
import "./someothercontract.sol";

contract newContract is SomeOtherContract {

}

```

So if we had a file named `someothercontract.sol` in the same directory as this contract (that's what the `./` means), it would get imported by the compiler.

# Put it to the test

Now that we've set up a multi-file structure, we need to use `import` to read the contents of the other file:

1.  Import `zombiefactory.sol` into our new file, `zombiefeeding.sol`.
