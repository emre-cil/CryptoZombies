# Chapter 12: Putting It Together

We're close to being done with our random Zombie generator! Let's create a public function that ties everything together.

We're going to create a public function that takes an input, the zombie's name, and uses the name to create a zombie with random DNA.

# Put it to the test

1.  Create a `public` function named `createRandomZombie`. It will take one parameter named `_name` (a `string` with the data location set to `memory`). _(Note: Declare this function `public` just as you declared previous functions `private`)_
2.  The first line of the function should run the `_generateRandomDna` function on `_name`, and store it in a `uint` named `randDna`.
3.  The second line should run the `_createZombie` function and pass it `_name` and `randDna`.
4.  The solution should be 4 lines of code (including the closing `}` of the function).
