# Chapter 13: More Expressive Assertions with Chai

Until now, we've been using the built-in `assert` module to write our assertions. While not bad, the `assert` module has a major drawback- the code doesn't read well. Fortunately, there are several better assertion modules out there, and `Chai` is one of the best.

## Chai Assertion Library

`Chai` is very powerful and, for the scope of this lesson, we're just going to scratch the surface. Once you've finished this lesson, feel free to check out [their guides](https://www.chaijs.com/guide/) to further your knowledge.

That said, let's take a look at the three kinds of assertion styles bundled into `Chai`:

- _expect_: lets you chain natural language assertions as follows:

  ```
  let lessonTitle = "Testing Smart Contracts with Truffle";
  expect(lessonTitle).to.be.a("string");

  ```

- _should_: allows for similar assertions as `expect` interface, but the chain starts with a `should` property:

  ```
  let lessonTitle = "Testing Smart Contracts with Truffle";
  lessonTitle.should.be.a("string");

  ```

- _assert_: provides a notation similar to that packaged with node.js and includes several additional tests and it's browser compatible:

  ```
  let lessonTitle = "Testing Smart Contracts with Truffle";
  assert.typeOf(lessonTitle, "string");

  ```

In this chapter, we are going to show you how to improve your assertions with `expect`.

> Note: We're assuming the `chai` package is already installed on your computer. If that's not the case, you can easily install it like so: `npm -g install chai`

In order to use `expect` style, the first thing we should do is to import it into our project as follows:

```
var expect = require('chai').expect;

```

## expect().to.equal()

Now that we've imported the `expect` into our project, checking if two strings are equal would look like below:

```
let zombieName = 'My Awesome Zombie';
expect(zombieName).to.equal('My Awesome Zombie');

```

Enough talking. Let's put `Chai`'s powers to some good use!

# Put it to the test

1.  Import `expect` into our project.
2.  Continuing the above example with `zombieName`, we can use `expect` to test for a succesfull transaction as follows:

```
expect(result.receipt.status).to.equal(true);

```

And we can check if Alice owns a zombie like this:

```
expect(zombieOwner).to.equal(alice);

```

1.  Replace all occurences of `assert.equal` with `expect`. We've left a bunch of comments in the code to make them easy to find.
