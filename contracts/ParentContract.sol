// SPDX-License-Identifier: BlueOak-1.0.0
pragma solidity 0.8.9;

import "./EventEmitter.sol";

contract ParentContract {
    IEmitter public emitter1;
    IEmitter public emitter2;

    constructor(IEmitter emitter1_, IEmitter emitter2_) {
        emitter1 = emitter1_;
        emitter2 = emitter2_;
    }

    function emitBothEvents(uint256 val1, uint256 val2) external {
        emitter1.emitEventWithArgs(val1, val2);
        emitter2.emitEventWithArgs(val2, val1);
    }
}
