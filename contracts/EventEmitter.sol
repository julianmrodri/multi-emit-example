// SPDX-License-Identifier: BlueOak-1.0.0
pragma solidity 0.8.9;

interface IEmitter {
    event EventHappened(uint256 val1, uint256 val2);

    function emitEventWithArgs(uint256 val1, uint256 val2) external;

}

contract EventEmitter is IEmitter {

    constructor(){}

    function emitEventWithArgs(uint256 val1, uint256 val2) external {
        emit EventHappened(val1, val2);
    }

}