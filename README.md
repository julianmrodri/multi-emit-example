# Waffle issue when chaining .to.emit.withArgs

The purpose of this example is to demonstrate how in certain situations when chaining multiple `.to.emit` checks in a Test, the initial validations are ignored, and only the last one is considered.

This is quite dangerous, as one would expect all checks are in place and all validations are performed, impacting directly on the ability to catch errors during regression testing.

## How to reproduce

To run the tests simply follow these steps:



```bash
# 1. Clone repository
git clone git@github.com:julianmrodri/multi-emit-example.git

# 2. Move to project folder and install dependencies
cd multi-emit-example && yarn

# 3. Run tests
yarn test
```
## Output

All tests will ***pass***, however it is very clear that the last four ***should fail***. This makes the valid ones completely unreliable.

```
Events
    ✔ Should emit one of the events - OK
    ✔ Should emit the other event - OK
    ✔ Should emit both events - OK... but checking?
    ✔ Should fail but passes - NOT COOL, wrong event name!
    ✔ Should fail but passes - NOT COOL, wrong value!
    ✔ Should fail but passes -- testing seems to ignore all but the last event when two events are thrown
    ✔ Should fail but passes -- testing seems to ignore all but the last event when one event is thrown
```
  
