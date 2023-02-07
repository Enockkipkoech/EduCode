// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

//faucet contract
contract Faucet {
    //give out ether
    function withdraw(uint256 withdraw_amount) public {
        //limit withdrawal amount
        require(withdraw_amount <= 100000000000000000);

        // Send the amount to the address that requested
        msg.sender.transfer(withdraw_amount);
    }

    //accepty incomming amount
    function() public payable {}
}
