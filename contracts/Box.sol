// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Box {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 _value);

    // Stores a new value in the contract
    function store(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
