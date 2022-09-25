# `17` The msg object

The `msg` object is a global object that is available in every function. It contains information about the current function call.

We use it to get information about the current transaction, such as the sender address, the value sent, and the gas remaining.

```solidity
msg.sender;
msg.value;
msg.gas;
```

Some of the properties of the `msg` object are read-only, and some are read-write.

- `msg.data` — The complete calldata which is a non-modifiable, non-persistent area where function arguments are stored and behave mostly like memory.
- `msg.gas` — Returns the available gas remaining for a current transaction.
- `msg.sig` — The first four bytes of the calldata for a function that specifies the function to be called (i.e., it’s function identifier)
- `msg.value` — The amount of wei sent with a message to a contract (wei is a denomination of ETH)
- `msg.sender` — The address of the account that started the current execution. This is the address of the account that sent the transaction that called the current function.

We have been using some msg properties already on other contracts. For example, in the `Payable` contract we used `msg.value` to get the amount of Ether sent to the contract. Or in the `EtherBank` contract we used `msg.sender` to get the address of the account that sent the transaction.

We will take a break on this exercise so hit the test button to move on to the next exercise.
