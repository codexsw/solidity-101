# `01` Welcome to Solidity 101

Welcome to our first lesson of Solidity 101. In this lesson we will learn how to write our first Solidity smart contract.

First, lets introduce the Solidity programming language. Solidity is a high-level programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably Ethereum. It was developed by Gavin Wood, Christian Reitwiessner, Alex Beregszaszi, Yoichi Hirai, and several other members of the Ethereum team at Ethereum. It is based on the programming language JavaScript and influenced by C++, Python and Java.

## What is a smart contract?

A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible.

Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible.

## What is a blockchain?

A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a hash pointer as a link to a previous block, a timestamp and transaction data. By design, blockchains are inherently resistant to modification of the data.

With this brief introduction to Solidity and smart contracts, let's start coding!

## Coding our first smart contract

In this lesson we will learn how to write our first Solidity smart contract. We will start by creating a new file called `contracts/HelloWorld.sol` and we will add the following code:

```solidity
pragma solidity ^0.8.9;

contract HelloWorld {
  function hello() public pure returns (string) {
    return "Hello World!";
  }
}

```
