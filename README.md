# Waffle issue when chaining .to.emit.withArgs

The purpose of this example is to demonstrate how in certain situations the when chaining multiple `.to.emit` checks in a Test, the previous validations are ignored.

This is quite dangerous and one would expect all checks are in place, and in case of making changes to the code and trusting in the tests for regression, these would still pass but they probably shouldn't.

## How to reproduce

To run the tests simply follow these steps:

1. Clone repo

```bash
yarn test
```


```bash
yarn test
```
